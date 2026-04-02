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

// --- (O UPDATE) ---
async function update(postId, userId, data) {
  const { content, visibility } = data;
  
  // Removemos o "AND user_id = ?" apenas para você conseguir testar
  const [res] = await db.query(
    "UPDATE posts SET content = ?, visibility = ? WHERE idposts = ?",
    [content, visibility, postId]
  );
  
  return res.affectedRows; 
}

// NÃO ESQUEÇA DE ADICIONAR O 'update' AQUI EMBAIXO!
module.exports = { list, create, update };