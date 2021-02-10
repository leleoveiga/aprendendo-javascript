const express = require("express");
const app = express();
const parser = require("body-parser");

const salve = require("./salve");
const usuarioAPI = require("./api/usuario");
// require("./api/produto")(app, "com param!");
//ou
const produtoAPI = require("./api/produto");
produtoAPI(app, "com param!");

app.use(salve("leo"));
app.post("/usuario", usuarioAPI.salvar);
app.get("/usuario", usuarioAPI.obter);

// app.use(parser.text());
app.use(parser.json());

app.get("/clientes/relatorio", (req, res) => {
	res.send(
		`Cliente relatório: completo = ${req.query.completo} & ano = ${req.query.ano}`
	);
});

app.post("/corpo", (req, res) => {
	res.send(req.body);
});

app.get("/clientes/:id", (req, res) => {
	res.send(`Cliente ${req.params.id} selecionado`);
});

app.get("/home", (req, res, next) => {
	// res.send("isto eh uma response")
	// res.json({
	//   nome: "cadeira gamer",
	//   preco: "420"
	// })
	res.json([
		{
			nome: "cadeira gamer",
			preco: "123",
		},
		{
			nome: "cadeira gamer2",
			preco: "234",
		},
	]);
	next();
});

app.get("/home", (req, res) => {
	console.log("um console log de uma cadeia de responsabilidade");
});

app.listen(3000, () => {
	console.log("backend rodando 2");
});
