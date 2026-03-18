const repo = require("../repositories/user.repo");

async function me(req, res, next) {
    try {
        const user = await repo.findById(req.user.id);
        res.json(user);
    } catch (e) { next(e); }
}

// 1. Crie a função que está faltando
async function updateUsuario(req, res, next) {
    try {
        // Lógica para atualizar o usuário aqui
        res.json({ message: "Usuário atualizado com sucesso" });
    } catch (e) { next(e); }
}

// 2. Adicione ela aqui na exportação!
module.exports = { 
    me, 
    updateUsuario 
};