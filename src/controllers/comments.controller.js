const repo = require("../repositories/comments.repo");

async function criarComentario(req, res, next) {
    try {
        const userId = req.user.id;
        const postId = req.params.postId;
        const { content } = req.body;

        const id = await repo.create(userId, postId, content);  

        res.status(201).json({ id, message: "Comentário enviado!" });
    } catch (e) {
        next(e);
    }
}



async function atualizarComentario(req, res, next) {
    try {
        const { id } = req.params; // ID que vem na URL
        const { content } = req.body; // Novo texto que vem no JSON

        const rows = await repo.update(id, content);

        if (rows === 0) {
            return res.status(404).json({ message: "Comentário não encontrado!" });
        }

        res.json({ message: "Comentário atualizado com sucesso!" });
    } catch (e) {
        next(e);
    }
}


async function deletarComentario(req, res, next) {
    try {
        const { id } = req.params;
        const rows = await repo.remove(id);

        if (rows === 0) {
            return res.status(404).json({ message: "Comentário não encontrado!" });
        }

        res.json({ message: "Comentário apagado com sucesso!" });
    } catch (e) {
        next(e);
    }
}

module.exports = { criarComentario, deletarComentario, atualizarComentario };