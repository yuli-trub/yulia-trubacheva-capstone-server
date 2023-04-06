/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

//change the order
exports.up = async function (knex) {
  return knex.schema
    .createTable("location", (table) => {
      table.increments("id").primary().unsigned();
      table.string("location_name").notNullable();
      table.string("location_img_url");
      table.string("country");
    })
    .createTable("profile", (table) => {
      table.increments("id").primary();
      table.string("avatar_url").notNullable();
      table.string("name").notNullable();
      table.integer("age").notNullable();
      table.text("bio").notNullable();
      table.integer("location_id").unsigned();
      table.date("start_date").notNullable();
      table.date("end_date").notNullable();
      table.boolean("isFriend").defaultTo(0);
      table.boolean("isSwiped").defaultTo(0);
      table.foreign("location_id").references("id").inTable("location");
    })
    .createTable("event", (table) => {
      // Name of field is just id
      table.increments("id").primary();
      table.string("event_img_url").notNullable();
      table.string("name").notNullable();
      table.text("description").notNullable();
      table.integer("location_id").unsigned();
      table.date("date").notNullable();
      table.boolean("isSaved").defaultTo(0);
      // Should be location_id
      table.foreign("location_id").references("id").inTable("location");
      // .onUpdate("CASCADE")
      // .onDelete("CASCADE");
    })
    .createTable("interest", (table) => {
      table.increments("id").primary();
      table.string("interest_name").notNullable();
    })
    .createTable("user", (table) => {
      table.increments("id").primary();
      table.integer("google_id");
      table.string("email").notNullable().unique();
      table.string("password").notNullable();
      table.string("name").notNullable();
      table.string("avatar_url");
      table.integer("age");
      table.text("bio");
      table.timestamp("updated_at").defaultTo(knex.fn.now());
    })
    .createTable("event_interest", (table) => {
      table.integer("event_id").unsigned().references("id").inTable("event");
      table
        .integer("interest_id")
        .unsigned()
        .references("id")
        .inTable("interest");
    })
    .createTable("profile_event", (table) => {
      table
        .integer("profile_id")
        .unsigned()
        .references("id")
        .inTable("profile");
      table.integer("event_id").unsigned().references("id").inTable("event");
    })
    .createTable("profile_interest", (table) => {
      table
        .integer("profile_id")
        .unsigned()
        .references("id")
        .inTable("profile");
      table
        .integer("interest_id")
        .unsigned()
        .references("id")
        .inTable("interest");
    })
    .createTable("user_interest", (table) => {
      table.integer("user_id").unsigned().references("id").inTable("user");
      table
        .integer("interest_id")
        .unsigned()
        .references("id")
        .inTable("interest");
    })
    .createTable("user_location", (table) => {
      table.integer("user_id").unsigned().references("id").inTable("user");
      table
        .integer("location_id")
        .unsigned()
        .references("id")
        .inTable("location");
    })
    .createTable("user_event", (table) => {
      table.integer("user_id").unsigned().references("id").inTable("user");
      table.integer("event_id").unsigned().references("id").inTable("event");
    })
    .createTable("user_profile", (table) => {
      table.integer("user_id").unsigned().references("id").inTable("user");
      table
        .integer("profile_id")
        .unsigned()
        .references("id")
        .inTable("profile");
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema
    .dropTable("user_profile")
    .dropTable("user_event")
    .dropTable("user_location")
    .dropTable("user_interest")
    .dropTable("profile_interest")
    .dropTable("profile_event")
    .dropTable("event_interest")
    .dropTable("user")
    .dropTable("interest")
    .dropTable("event")
    .dropTable("profile")
    .dropTable("location");
};
