const express = require("express");
const morgan = require("morgan");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("Bem-vindo à minha API!");
});

app.get("/api/:teste", (req, res) => {
  const parametro = req.params.teste;
  res.json({ mensagem: `Você acessou com o parâmetro: ${parametro}` });
});

app.listen(PORT, () => {
  console.log(`Servidor iniciado na porta ${PORT}`);
});
