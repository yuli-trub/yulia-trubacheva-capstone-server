const express = require("express");
const router = express.Router();
const knex = require("knex")(require("../knexfile"));

router.get("/", async (_req, res) => {
  try {
    const interestArr = await knex("interest")
      .select(["interest.id as id", "interest.interest_name as name"])
      .from("interest");

    res.json(interestArr);
  } catch {
    res.status(500).json({
      error: true,
      message: "Could not fetch interests from database",
    });
  }
});

module.exports = router;
