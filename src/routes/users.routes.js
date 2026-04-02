const express = require("express");
const { me, updateUsuario } = require("../controllers/users.controller");
const { authRequired } = require("../middlewares/auth.middleware");
const { deletarUsuario } = require("../repositories/user.repo");
const router = express.Router();

router.get("/me", authRequired, me);

router.put("/:id", authRequired, updateUsuario);



module.exports = router;