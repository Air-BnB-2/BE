const db = require("../database/dbConfig");

module.exports = {
  add,
  findBy,
  findById,
  remove,
};

async function add(user) {
  await db("user").insert(user);
  return findBy(user);
}

function findBy(filter) {
  return db("user").where(filter).first();
}

function findById(id) {
  return db("user").select("*").where({ id }).first();
}

function remove(id) {
  return db("user").del().where({ id });
}
