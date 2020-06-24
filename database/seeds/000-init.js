exports.seed = function (knex) {
  return knex("listing")
    .truncate()
    .then(function () {
      return knex("user").truncate();
    });
};
