exports.seed = async function (knex) {
  await knex("listing").del();
  await knex("user").del();
};
