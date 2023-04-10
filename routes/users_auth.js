const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt"); // A library to hash passwords before storing in DB https://github.com/kelektiv/node.bcrypt.js#usage
const knex = require("knex")(require("../knexfile"));
require("dotenv").config();
const authorise = require("../middleware/auth");

const SALT_ROUNDS = 8;

router.post("/register", (req, res) => {
  const { password } = req.body;

  // Encrypt the password the user provided via bcrypt
  bcrypt.hash(password, SALT_ROUNDS, async (err, hashedPassword) => {
    if (err) {
      return res
        .status(500)
        .json({ message: "Couldn't encrypt the supplied password" });
    }

    try {
      // Create a user record in the database
      await knex("user").insert({
        ...req.body, // spread over all the form fields
        password: hashedPassword, // but use the hashed password for the password (instead of the plain text password)
      });

      // Retrieve the newly created user from the database
      // const newUser = await knex("user")
      //   .where({ email: req.body.email })
      //   .first();

      // // Insert the user's profile data into the profile table
      // await knex("profile").insert({
      //   name: req.body.name,
      //   age: req.body.age,
      //   avatar_url: "https://avatars.dicebear.com/api/avataaars/example.svg",
      // });

      res.json({ success: true });
    } catch (error) {
      res.status(500).json({
        message: `Couldn't create a new user: ${error.message}`,
      });
    }
  });
});

// Allow user to login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Query the database for the user via email address
    const user = await knex("user").where({ email: email }).first();

    // Ensure the password provided matches the encrypted password
    bcrypt.compare(password, user.password, function (_, success) {
      if (!success) {
        return res
          .status(403)
          .json({ message: "Username/Password combination is incorrect" });
      }

      // Generate a JWT token for the user
      const token = jwt.sign(
        {
          id: user.id,
          sub: user.email,
        },
        process.env.JWT_SECRET,
        { expiresIn: "8h" }
      );

      // And send it back to the frontend
      res.status(200).json({ authToken: token });
    });
  } catch (error) {
    res.status(400).json({ message: "User not found" });
  }
});

router.get("/profile", authorise, async (req, res) => {
  try {
    // Query the database for the user by comparing the ID in the JWT token against the ID of the user
    const user = await knex("user").where({ id: req.token.id }).first();

    const events = await knex("event")
      .select([
        "event.id as id",
        "event.event_img_url as image",
        "event.name as name",
        "event.description as description",
        "location.location_name as location",
        "event.date as date",
        "event.isSaved as isSaved",
      ])
      .from("event")
      .join("location", "location.id", "event.location_id")
      .innerJoin("user_event", "event.id", "user_event.event_id")
      .where({ "user_event.user_id": req.token.id })
      .orderBy("event.date", "desc");

    const friends = await knex("profile")
      .select(["profile.*"])
      .from("profile")
      .innerJoin("user_profile", "profile.id", "user_profile.profile_id")
      .where({ "user_profile.user_id": req.token.id });

    const fullProfile = {
      user,
      events,
      friends,
    };

    // Remove user password before sending it to client side (via the `delete` operator)
    delete user.password;

    res.status(200).json(fullProfile);
  } catch (error) {
    res.status(500).json({ message: "Can't fetch user profile" });
  }
});

router.get("/friends/:id", authorise, async (req, res) => {
  const profileId = req.params.id;
  try {
    const user = await knex("user").where({ id: req.token.id }).first();
    const userId = user.id;
    const existingFriendship = await knex("user_profile")
      .where(function () {
        this.where("user_id", userId).andWhere("profile_id", profileId);
      })
      .first();

    if (!existingFriendship) {
      return res.status(404).json({ message: "Friendship not found" });
    }
    res.status(200).json(existingFriendship);
  } catch (error) {
    res.status(500).json({ message: "Can't fetch user friends" });
  }
});

router.post("/friends/:id", authorise, async (req, res) => {
  const profileId = req.params.id;

  try {
    const user = await knex("user").where({ id: req.token.id }).first();
    const userId = user.id;
    const existingFriendship = await knex("user_profile")
      .where(function () {
        this.where("user_id", userId).andWhere("profile_id", profileId);
        // .orWhere("user_id", profileId)
        // .andWhere("profile_id", userId);
      })
      .first();
    if (existingFriendship) {
      res.status(400).json("The user is already a friend");
      return;
    }

    const newFriend = await knex("user_profile").insert({
      user_id: userId,
      profile_id: profileId,
    });

    res.status(201).json(newFriend);
  } catch (error) {
    res.status(500).json({ message: "Could not add new friend to database" });
  }
});

router.delete("/profiles/:id", authorise, async (req, res) => {
  const profileId = req.params.id;

  try {
    const user = await knex("user").where({ id: req.token.id }).first();
    const userId = user.id;
    const newFriend = await knex("user_profile")
      .where({ user_id: userId, profile_id: profileId })
      .del();

    if (newFriend === 0) {
      res.status(404).json("Friendship not found");
      return;
    }

    res.status(201).json(newFriend);
  } catch (error) {
    res.status(500).json({ message: "Could not delete friend to database" });
  }
});

router.post("/events/:id", authorise, async (req, res) => {
  const eventId = req.params.id;

  try {
    const user = await knex("user").where({ id: req.token.id }).first();
    const userId = user.id;

    const userSavedEvents = await knex("user_event")
      .select("*")
      .where({ user_id: req.token.id });

    const alreadySavedEvent = userSavedEvents.find(
      (event) => event.event_id === eventId
    );

    if (alreadySavedEvent) {
      res.status(400).json("The event is already saved");
      return;
    }

    const newEvent = await knex("user_event").insert({
      user_id: userId,
      event_id: eventId,
    });

    res.status(201).json(newEvent);
  } catch (error) {
    res.status(500).json({ message: "Could not add new friend to database" });
  }
});

router.delete("/events/:id", authorise, async (req, res) => {
  const eventId = req.params.id;

  try {
    const user = await knex("user").where({ id: req.token.id }).first();
    const userId = user.id;
    const newEvent = await knex("user_event")
      .where({ user_id: userId, event_id: eventId })
      .del();

    if (newEvent === 0) {
      res.status(404).json("Event not found");
      return;
    }

    res.status(201).json(newEvent);
  } catch (error) {
    res.status(500).json({ message: "Could not delete event from database" });
  }
});

module.exports = router;
