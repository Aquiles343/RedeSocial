const express = require("express");
const { list, create, update } = require("../controllers/items.controller"); // 1. Adicionei 'update' aqui
const { authRequired } = require("../middlewares/auth.middleware");
const router = express.Router();

router.get("/", authRequired, list);
router.post("/", authRequired, create);
router.put("/:id", authRequired, update); // 2. Adicionei esta rota com o ":id"

module.exports = exports = router;