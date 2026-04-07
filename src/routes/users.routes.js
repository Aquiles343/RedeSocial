const express = require("express");
const userController = require("../controllers/users.controller");
const { authRequired } = require("../middlewares/auth.middleware");
const router = express.Router();

router.get("/me", authRequired, userController.me);
router.put("/:id", authRequired, userController.updateUsuario);
router.delete("/delete", authRequired, userController.deletarUsuario);

module.exports = router;