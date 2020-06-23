const db = require("../database/dbConfig");

module.exports = {
  add,
  findById,
  findByUserId,
  edit,
  remove,
};

async function add(listing) {
  const [id] = await db("listing").insert(listing);
  return findById(id);
}

function findById(id) {
  return db("listing").first();
}

function findByUserId(userId) {
  return null;
}

function edit(id) {
  return null;
}

function remove(id) {
  return null;
}
