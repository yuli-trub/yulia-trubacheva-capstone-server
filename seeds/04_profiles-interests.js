/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  // await knex("profile").del();
  // await knex("interest").del();
  await knex("profile_interest").del();
  await knex("profile_interest").insert([
    { profile_id: 1, interest_id: 3 },
    { profile_id: 2, interest_id: 1 },
    { profile_id: 2, interest_id: 5 },
    { profile_id: 3, interest_id: 2 },
    { profile_id: 3, interest_id: 3 },
    { profile_id: 3, interest_id: 4 },
    { profile_id: 4, interest_id: 5 },
    { profile_id: 4, interest_id: 1 },
    { profile_id: 5, interest_id: 2 },
    { profile_id: 5, interest_id: 4 },
    { profile_id: 5, interest_id: 6 },
    { profile_id: 6, interest_id: 1 },
    { profile_id: 6, interest_id: 2 },
    { profile_id: 7, interest_id: 1 },
    { profile_id: 7, interest_id: 3 },
    { profile_id: 7, interest_id: 4 },
    { profile_id: 8, interest_id: 1 },
    { profile_id: 8, interest_id: 2 },
    { profile_id: 8, interest_id: 6 },
    { profile_id: 9, interest_id: 2 },
    { profile_id: 9, interest_id: 4 },
    { profile_id: 9, interest_id: 5 },
    { profile_id: 10, interest_id: 1 },
    { profile_id: 10, interest_id: 2 },
    { profile_id: 10, interest_id: 4 },
    { profile_id: 11, interest_id: 3 },
    { profile_id: 11, interest_id: 6 },
    { profile_id: 12, interest_id: 2 },
    { profile_id: 12, interest_id: 4 },
    { profile_id: 12, interest_id: 5 },
    { profile_id: 13, interest_id: 1 },
    { profile_id: 13, interest_id: 2 },
    { profile_id: 14, interest_id: 5 },
    { profile_id: 15, interest_id: 1 },
    { profile_id: 15, interest_id: 6 },
    { profile_id: 16, interest_id: 5 },
    { profile_id: 17, interest_id: 1 },
    { profile_id: 17, interest_id: 2 },
    { profile_id: 18, interest_id: 1 },
    { profile_id: 18, interest_id: 2 },
    { profile_id: 19, interest_id: 2 },
    { profile_id: 19, interest_id: 6 },
    { profile_id: 20, interest_id: 1 },
    { profile_id: 20, interest_id: 4 },
    { profile_id: 21, interest_id: 5 },
    { profile_id: 21, interest_id: 6 },
    { profile_id: 23, interest_id: 1 },
    { profile_id: 23, interest_id: 5 },
    { profile_id: 23, interest_id: 6 },
    { profile_id: 24, interest_id: 3 },
    { profile_id: 24, interest_id: 4 },
    { profile_id: 24, interest_id: 6 },
    { profile_id: 25, interest_id: 3 },
    { profile_id: 25, interest_id: 3 },
    { profile_id: 25, interest_id: 4 },
    { profile_id: 25, interest_id: 5 },
    { profile_id: 25, interest_id: 1 },
    { profile_id: 26, interest_id: 5 },
    { profile_id: 26, interest_id: 4 },
    { profile_id: 26, interest_id: 2 },
    { profile_id: 26, interest_id: 1 },
    { profile_id: 27, interest_id: 1 },
    { profile_id: 27, interest_id: 2 },
    { profile_id: 27, interest_id: 3 },
    { profile_id: 28, interest_id: 2 },
    { profile_id: 28, interest_id: 6 },
    { profile_id: 28, interest_id: 4 },
    { profile_id: 28, interest_id: 3 },
    { profile_id: 29, interest_id: 1 },
    { profile_id: 29, interest_id: 5 },
    { profile_id: 29, interest_id: 4 },
    { profile_id: 30, interest_id: 1 },
    { profile_id: 30, interest_id: 4 },
    { profile_id: 30, interest_id: 3 },
    { profile_id: 30, interest_id: 6 },
    { profile_id: 31, interest_id: 1 },
    { profile_id: 31, interest_id: 3 },
    { profile_id: 31, interest_id: 4 },
    { profile_id: 32, interest_id: 4 },
    { profile_id: 32, interest_id: 5 },
    { profile_id: 33, interest_id: 2 },
    { profile_id: 33, interest_id: 6 },
    { profile_id: 33, interest_id: 1 },
  ]);
};
