const jwt = require("jsonwebtoken");

function authRequired(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: "Token ausente" });
  }

  const [, token] = authHeader.split(" ");

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log(`decoded token: ${JSON.stringify(decoded, null, 2)}`)
    // AQUI ESTÁ O SEGREDO: 
    // O que vier do token (id, email) vai para o req.user
    req.user = decoded; 
    next();
  } catch (err) {
    return res.status(401).json({ message: "Token inválido", error: err});
  }
}

module.exports = { authRequired };
