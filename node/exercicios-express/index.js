const express = require("express");
const salve = require("./salve");
const app = express();

app.use(salve("leo"));

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
