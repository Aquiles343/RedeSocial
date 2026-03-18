const db = require("../config/db");

async function findByEmail(email) {
  const [rows] = await db.query("SELECT * FROM users WHERE email = ?", [email]);
  return rows[0];
}

async function createUser(name, email, bio, password_hash) {
  const [result] = await db.query(
    "select sf_user_create(?, ?, ?, ?) as resultado",
    [name, email, bio, password_hash]
  );
  return result[0].resultado;
}

async function findById(id) {
  const [rows] = await db.query("SELECT id, name, email FROM users WHERE id = ?", [id]);
  return rows[0];
}

module.exports = { findByEmail, createUser, findById };
