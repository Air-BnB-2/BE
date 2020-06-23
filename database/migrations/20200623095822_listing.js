exports.up = function (knex) {
  return knex.schema.createTable("listing", (tbl) => {
    tbl.increments();

    tbl.integer("user_id").unsigned().references("user.id").onDelete("CASCADE");

    tbl.string("property_name", 255).unique().notNullable();
    tbl.string("zipcode", 5).notNullable();

    tbl.integer("property_type").notNullable();
    tbl.integer("room_type").notNullable();
    tbl.integer("amenities").notNullable();
    tbl.integer("accomodates").notNullable();
    tbl.integer("bathrooms").notNullable();
    tbl.integer("cancellation_policy").notNullable();
    tbl.integer("cleaning_fee").notNullable();
    tbl.integer("instant_bookable").notNullable();
    tbl.integer("bedrooms").notNullable();
    tbl.integer("beds").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("listing");
};
