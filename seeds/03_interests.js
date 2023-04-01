/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("interest").del();
  await knex("interest").insert([
    { id: 1, interest_name: "Sightseeing" },
    { id: 2, interest_name: "Adventure activities" },
    { id: 3, interest_name: "Culinary experiences" },
    { id: 4, interest_name: "Cultural immersion" },
    { id: 5, interest_name: "Relaxation" },
    { id: 6, interest_name: "Nightlife" },
  ]);
};
