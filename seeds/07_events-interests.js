/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("event_interest").del();
  await knex("event_interest").insert([{ event_id: 1, interest_id: 1 }]);
};
