const express = require("express");
const router = express.Router();
const knex = require("knex")(require("../knexfile"));

router.get("/", async (_req, res) => {
  try {
    const locArr = await knex("profile")
      .select([
        "profile.profile_id as id",
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
      .join("location", "profile.location", "location.location_id");
    res.json(locArr);
  } catch {
    res.status(500).json({
      error: true,
      message: "Could not fetch profiles from database",
    });
  }
});

module.exports = router;
