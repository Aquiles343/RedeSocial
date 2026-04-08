const express = require("express");
const { criarLike, deletarLike } = require("../controllers/like.controller");
const router = express.Router();

router.post("/", criarLike);

router.delete("/:post_id/:user_id", deletarLike);

module.exports = router;