const db = require("../config/db");

async function save(postId, userId) {
    const sql = "INSERT INTO likes (post_id, user_id) VALUES (?, ?)";
    return await db.execute(sql, [postId, userId]);
}


async function remove(post_id, user_id) {
    const sql = "DELETE FROM likes WHERE post_id = ? AND user_id = ?";
    return await db.execute(sql, [post_id, user_id]);
}


module.exports = { save, remove};
