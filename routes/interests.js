const express = require("express");
const router = express.Router();
const knex = require("knex")(require("../knexfile"));

router.get("/", async (_req, res) => {
  try {
    const locArr = await knex("location").select([
      "location.location_id as id",
      "location.location_name as city",
      "location.country as country",
      "location.location_img_url as image",
    ]);
    res.json(locArr);
  } catch {
    res.status(500).json({
      error: true,
      message: "Could not fetch locations from database",
    });
  }
});

module.exports = router;
