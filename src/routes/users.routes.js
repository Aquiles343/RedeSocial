const express = require("express");
const { me, updateUsuario } = require("../controllers/users.controller");
const { authRequired } = require("../middlewares/auth.middleware");
const router = express.Router();

router.get("/me", authRequired, me);

router.put("/:id", updateUsuario);

module.exports = router;