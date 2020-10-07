const port = 8080;

const express = require('express');
const app = express();

app.get('/produtos', (req, res, next) => {
  res.send({ nome: 'Notebook', preco: 250222.00});
});

app.listen(port, () => {
  console.log(`Servidor executando na porta ${port}`);
});