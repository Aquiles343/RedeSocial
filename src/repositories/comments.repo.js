const db = require("../config/db");

// Criar comentários
async function create(userId, postId, content) {
    const [res] = await db.query(
        "INSERT INTO comments (user_id, post_id, content) VALUES (?, ?, ?)",
        [userId, postId, content]
    );
    return res.insertId;
}

// Atualizar comentários
async function update(id, content) {
    const [res] = await db.query(
        "UPDATE comments SET content = ? WHERE idcomments = ?",
        [content, id]
    );
    return res.affectedRows;
}


// Deletar comentário
async function remove(id) {
    const [res] = await db.query(
        "DELETE FROM comments WHERE idcomments = ?", 
        [id]
    );
    return res.affectedRows;
}


module.exports = { create, remove, update};