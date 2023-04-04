const express = require("express");
const router = express.Router();
const knex = require("knex")(require("../knexfile"));

router.get("/", async (_req, res) => {
  try {
    const locArr = await knex("profile")
      .select([
        "profile.id as id",
        "profile.avatar_url as avatar",
        "profile.name as name",
        "profile.age as age",
        "profile.bio as bio",
        "location.location_name as location",
        "profile.start_date as start_date",
        "profile.end_date as end_date",
        "profile.isFriend as isFriend",
        "profile.isSwiped as isSwiped",
      ])
      .from("profile")
      .join("location", "profile.location_id", "location.id");

    res.json(locArr);
  } catch {
    res.status(500).json({
      error: true,
      message: "Could not fetch profiles from database",
    });
  }
});

router.get("/:id", async (req, res) => {
  const profileId = req.params.id;

  try {
    const profile = await knex("profile")
      .select([
        "profile.id as id",
        "profile.avatar_url as avatar",
        "profile.name as name",
        "profile.age as age",
        "profile.bio as bio",
        "location.location_name as location",
        "profile.start_date as start_date",
        "profile.end_date as end_date",
        "profile.isFriend as isFriend",
        "profile.isSwiped as isSwiped",
      ])
      .from("profile")
      .join("location", "profile.location_id", "location.id")
      .where({ "profile.id": profileId })
      .groupBy("profile.id");

    const events = await knex("event")
      .select(["event.*"])
      .from("event")
      .innerJoin("profile_event", "event.id", "profile_event.event_id")
      .where({ "profile_event.profile_id": profileId })
      .orderBy("event.date", "desc");

    const interests = await knex("interest")
      .select([
        "interest.id as interest_id",
        "interest.interest_name as interest_name",
      ])
      .from("interest")
      .innerJoin(
        "profile_interest",
        "interest.id",
        "profile_interest.interest_id"
      )
      .where({ "profile_interest.profile_id": profileId })
      .groupBy("interest.id");

    const fullProfile = {
      ...profile[0],
      events,
      interests,
    };

    res.json(fullProfile);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ error: true, message: `Could not fetch item ${profileId}` });
  }
});
module.exports = router;
