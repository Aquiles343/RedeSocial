const repo = require("../repositories/user.repo");

async function me(req, res, next) {
  try {
    const user = await repo.findById(req.user.id);
    res.json(user);
  } catch (e) { next(e); }
}

async function updateUsuario(req, res, next) {
  try {
    const userId = req.user?.id; 
    console.log(`USERID: ${userId}`)

    if (!userId) {
      return res.status(401).json({ message: "ID não encontrado no token. Faça login novamente!" });
    }

    const { name, email, bio } = req.body;
    
    await repo.updateUser(userId, { name, email, bio });
    
    res.json({ message: "AGORA FOI! Atualizado com sucesso." });
  } catch (e) { 
    next(e); 
  }
}

async function deletarUsuario(req, res, next) {
  try {
    const userId = req.user?.id;
    
    if (!userId) {
      return res.status(401).json({ message: "ID não encontrado no token. Faça login novamente!" });
    }
    
    await repo.deleteUser(userId);
    res.json({ message: "Usuário deletado com sucesso!" });
  } catch (e) {
    next(e);
  }
}

module.exports = { me, updateUsuario, deletarUsuario };


