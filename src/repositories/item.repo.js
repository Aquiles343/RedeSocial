const db = require("../config/db");

// Lista os posts
async function list(userId) {
  const [rows] = await db.query(
    "SELECT * FROM posts WHERE user_id = ?", 
    [userId]
  );
  return rows;
}

// Cria um post
async function create(userId, data) {
  const { content, visibility } = data; 
  const [res] = await db.query(
    "INSERT INTO posts (user_id, content, visibility) VALUES (?, ?, ?)",
    [userId, content, visibility || 'public']
  );
  return res.insertId;
}

// --- UPDATE ---
async function update(postId, userId, data) {
  const { content, visibility } = data;
  
 
  const [res] = await db.query(
    "UPDATE posts SET content = ?, visibility = ? WHERE idposts = ?",
    [content, visibility, postId]
  );
  
  return res.affectedRows; 
}

async function remove(postId) {
    const [res] = await db.query(
        "DELETE FROM posts WHERE idposts = ?",
        [postId]
    );
    return res.affectedRows;
}


module.exports = { list, create, update, remove };