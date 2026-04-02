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
  const [rows] = await db.query(
    "SELECT idusers as id, name, email, bio FROM users WHERE idusers = ?", 
    [id]
  );
  return rows[0];
}

async function updateUser(id, data) {
  const { name, email, bio } = data;
  
  const [res] = await db.query(
    "UPDATE users SET name = ?, email = ?, bio = ? WHERE idusers = ?",
    [name, email, bio, id]
  );
  
  return res.affectedRows;
}



module.exports = { findByEmail, createUser, findById, updateUser};
