const jwt = require("jsonwebtoken");
const { hashPassword, comparePassword } = require("../utils/password");
const repo = require("../repositories/user.repo");

async function register(req, res, next) {
  try {
    const { name, email, bio, password } = req.body;
    const exists = await repo.findByEmail(email);
    if (exists) return res.status(409).json({ message: "E-mail já cadastrado" });

    const hash = await hashPassword(password);
    await repo.createUser(name, email, bio, hash);
    res.status(201).json({ message: "Usuário criado" });
  } catch (e) { next(e); }
}

async function login(req, res, next) {
  try {
    const { email, password } = req.body;
    const user = await repo.findByEmail(email);
    if (!user) return res.status(401).json({ message: "Credenciais inválidas" });

    const ok = await comparePassword(password, user.password_hash);
    if (!ok) return res.status(401).json({ message: "Credenciais inválidas" });

    // --- O AJUSTE ESTÁ AQUI EMBAIXO ---
    const token = jwt.sign(
      { id: user.idusers, email: user.email }, 
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES_IN }
    );

    res.json({ accessToken: token });
  } catch (e) { next(e); }
}

module.exports = { register, login };