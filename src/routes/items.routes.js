const express = require("express");
const { list, create, update, deletarPost} = require("../controllers/items.controller"); 
const { authRequired } = require("../middlewares/auth.middleware");
const router = express.Router();

router.get("/", authRequired, list);
router.post("/", authRequired, create);
router.put("/:id", authRequired, update); 
router.delete("/:id", authRequired, deletarPost);



module.exports = exports = router;