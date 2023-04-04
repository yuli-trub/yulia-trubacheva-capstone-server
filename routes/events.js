const express = require("express");
const router = express.Router();
const knex = require("knex")(require("../knexfile"));

router.get("/", async (_req, res) => {
  try {
    const eventArr = await knex("event")
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
      .join("location", "location.id", "event.location_id");

    res.json(eventArr);
  } catch {
    res.status(500).json({
      error: true,
      message: "Could not fetch events from database",
    });
  }
});

router.get("/:id", async (req, res) => {
  const eventId = req.params.id;

  try {
    const event = await knex("profile")
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
      .join("location", "event.location_id", "location.id")
      .where({ "event.id": eventId })
      .groupBy("event.id");
    res.json(event);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ error: true, message: `Could not fetch event ${profileId}` });
  }
});

router.put("/:id", async (req, res) => {
  const eventId = req.params.id;

  const { isSaved } = req.body;
  try {
    const event = await knex("event").where({ id: eventId }).update({
      isSaved,
    });

    const updatedEvent = await knex("event")
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
      .join("location", "event.location_id", "location.id")
      .where({ "event.id": eventId })
      .groupBy("event.id");

    res.json(updatedEvent);
  } catch (error) {
    console.log(error);
    res
      .status(404)
      .json({ error: true, message: `Could not find event ${invId}` });
  }
});

module.exports = router;
