const express = require("express");
const router = express.Router();
const produto = require("../controllers/ProdutoController")

router.get ("/", produto.index)
router.get("/criar",produto.create)
router.post("/criar", produto.store)




module.exports =router;
