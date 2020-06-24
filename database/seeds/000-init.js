exports.seed = async function (knex) {
  await knex("listing").truncate();
  await knex("user").truncate();
};
