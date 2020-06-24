const db = require("../database/dbConfig");

module.exports = {
  add,
  findById,
  findByUserId,
  edit,
  remove,
};

async function add(listing) {
  return db("listing").insert(listing);
}

function findById(id) {
  return db("listing").first();
}

function findByUserId(user_id) {
  return db("listing").where({ user_id });
}

function edit(id) {
  return null;
}

function remove(id) {
  return null;
}
