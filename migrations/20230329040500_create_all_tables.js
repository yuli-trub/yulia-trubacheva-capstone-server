/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema
    .createTable("profile", (table) => {
      table.uuid("profile_id").primary().defaultTo(knex.raw("(UUID())"));
      table.string("avatar_url").notNullable();
      table.string("name").notNullable();
      table.integer("age").notNullable();
      table.text("bio").notNullable();
      table.timestamp("start_date").notNullable();
      table.timestamp("end_date").notNullable();
      table.boolean("isFriend").defaultTo(0);
      table.boolean("isSwiped").defaultTo(0);
      table
        .foreign("location")
        .references("location_id")
        .inTable("location")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    })
    .createTable("location", (table) => {
      table.increments("location_id").primary();
      table.string("location_name").notNullable();
    })
    .createTable("event", (table) => {
      table.uuid("event_id").primary().defaultTo(knex.raw("(UUID())"));
      table.string("event_img_url").notNullable();
      table.string("name").notNullable();
      table.text("description").notNullable();
      table.date("date").notNullable();
      table.boolean("isSaved").defaultTo(0);
      table
        .foreign("location")
        .references("location_id")
        .inTable("location")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    })
    .createTable("profile_event", (table) => {
      table.increments("profile_event_id").primary();
      table.integer("profile_id").references("profile_id").inTable("profile");
      table.integer("event_id").references("event_id").inTable("event");
    })
    .createTable("interest", (table) => {
      table.increments("interest_id").primary();
      table.string("interest_name").notNullable();
    })
    .createTable("event_interest", (table) => {
      table.increments("event_interest_id").primary();
      table.integer("event_id").references("event_id").inTable("event");
      table
        .integer("interest_id")
        .references("interest_id")
        .inTable("interest");
    })
    .createTable("profile_interest", (table) => {
      table.increments("profile_interest_id").primary();
      table.integer("profile_id").references("profile_id").inTable("profile");
      table
        .integer("interest_id")
        .references("interest_id")
        .inTable("interest");
    })
    .createTable("user", (table) => {
      table.increments("user_id").primary();
      table.integer("google_id").notNullable();
      //   table.string("email").notNullable().unique();
      //   table.string("password").notNullable();
      table.string("avatar_url").notNullable();
      table.string("username").notNullable();
      table.string("name").notNullable();
      table.integer("age");
      table.text("bio");
      table.timestamp("updated_at").defaultTo(knex.fn.now());
    })
    .createTable("user_interest", (table) => {
      table.increments("user_interest_id").primary();
      table.integer("user_id").references("user_id").inTable("user");
      table
        .integer("interest_id")
        .references("interest_id")
        .inTable("interest");
    })
    .createTable("user_location", (table) => {
      table.increments("user_location_id").primary();
      table.integer("user_id").references("user_id").inTable("user");
      table
        .integer("location_id")
        .references("location_id")
        .inTable("location");
    })
    .createTable("user_event", (table) => {
      table.increments("user_event_id").primary();
      table.integer("user_id").references("user_id").inTable("user");
      table.integer("event_id").references("event_id").inTable("event");
    })
    .createTable("user_profile", (table) => {
      table.increments("user_profile_id").primary();
      table.integer("user_id").references("user_id").inTable("user");
      table.integer("profile_id").references("profile_id").inTable("profile");
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema
    .dropTable("profile")
    .dropTable("location")
    .dropTable("event")
    .dropTable("profile_event")
    .dropTable("interest")
    .dropTable("event_interest")
    .dropTable("profile_interest")
    .dropTable("user")
    .dropTable("user_interest")
    .dropTable("user_location")
    .dropTable("user_event")
    .dropTable("user_profile");
};
