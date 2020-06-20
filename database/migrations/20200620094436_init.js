exports.up = function (knex) {
  return knex.schema.createTable("user", (tbl) => {
    tbl.increments();

    tbl.string("username", 32).notNullable().unique();
    tbl.string("password", 255).notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("user");
};
