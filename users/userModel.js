const db = require("../database/dbConfig");
const { xssFilter } = require("helmet");

module.exports = {
  add,
  findBy,
  findById,
  remove,
};

async function add(user) {
  const [id] = await db("user").insert(user);
  return findById(id);
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
