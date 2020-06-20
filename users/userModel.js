const db = require("../database/dbConfig");

module.exports = {
  add,
  findById,
  remove,
};

async function add(user) {
  const [id] = await db("user").insert(user);
  return findById(id);
}

function findBy(filter) {
  return null;
}

function findById(id) {
  return db("user").select("*").where({ id }).first();
}

function remove(id) {
  return db("user").del().where({ id });
}
