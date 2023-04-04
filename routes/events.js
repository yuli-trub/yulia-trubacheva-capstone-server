const express = require("express");
const router = express.Router();
const knex = require("knex")(require("../knexfile"));

router.get("/", async (_req, res) => {
  try {
    const locArr = await knex("event").select(["event.id as id"]);
    res.json(locArr);
  } catch {
    res.status(500).json({
      error: true,
      message: "Could not fetch locations from database",
    });
  }
});

module.exports = router;
