const repo = require("../repositories/item.repo");
const { deleteUser } = require("./users.controller");

async function list(req, res, next) {
  try {
    const items = await repo.list(req.user.id);
    res.json(items);
  } catch (e) { next(e); }
}

async function create(req, res, next) {
  try {
    const id = await repo.create(req.user.id, req.body);
    res.status(201).json({ id });
  } catch (e) { next(e); }
}

// --- FUNÇÃO UPDATE ---
async function update(req, res, next) {
  try {
    const { id } = req.params; // Pega o ID da URL (ex: /items/1)
    const affectedRows = await repo.update(id, req.user.id, req.body);
    
    if (affectedRows === 0) {
      return res.status(404).json({ message: "Post não encontrado ou você não tem permissão." });
    }
    
    res.json({ message: "Post atualizado com sucesso!" });
  } catch (e) { next(e); }
}

async function deletarPost(req, res, next) {
    try {
        const { id } = req.params; // Pegando o ID da URL (ex: /posts/5)
        
        const rows = await repo.remove(id);

        if (rows === 0) {
            return res.status(404).json({ message: "Post não encontrado!" });
        }

        res.json({ message: "Post deletado com sucesso!" });
    } catch (e) {
        next(e);
    }
}



module.exports = { list, create, update, deletarPost};
