const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt"); // A library to hash passwords before storing in DB https://github.com/kelektiv/node.bcrypt.js#usage
const knex = require("knex")(require("../knexfile"));
require("dotenv").config();
const authorise = require("../middleware/auth");

const SALT_ROUNDS = 8;

router.post("/signup", (req, res) => {
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

    // Remove user password before sending it to client side (via the `delete` operator)
    delete user.password;

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "Can't fetch user profile" });
  }
});

module.exports = router;
