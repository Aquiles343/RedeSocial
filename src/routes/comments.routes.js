const express = require("express");
const router = express.Router();
const { criarComentario, deletarComentario, atualizarComentario } = require("../controllers/comments.controller");
const {authRequired} = require("../middlewares/auth.middleware");


router.post("/:postId", authRequired, criarComentario);
router.put("/:id", authRequired, atualizarComentario);
router.delete("/:id", authRequired, deletarComentario);


module.exports = router;