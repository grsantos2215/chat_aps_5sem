const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("O Servidor está no Ar e Rodando");
});

module.exports = router;
