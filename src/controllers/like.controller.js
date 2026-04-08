const repo = require("../repositories/like.repo");

async function criarLike(req, res, next) {
    try {
        const { post_id, user_id } = req.body;
      
        if (!post_id || !user_id) {
            return res.status(400).json({ error: "post_id e user_id são obrigatórios" });
        }
        await repo.save(post_id, user_id);
        res.status(201).json({ message: "Like adicionado com sucesso!" });
    } catch (e) { next(e); }
}

async function deletarLike(req, res, next) {
    try {
        const { post_id, user_id } = req.params; 
        await repo.remove(post_id, user_id);   
        res.status(204).send();
    } catch (e) { next(e); }
}

module.exports = { criarLike, deletarLike};