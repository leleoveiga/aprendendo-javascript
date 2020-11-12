const url = "http://lad.ufcg.edu.br/loac/uploads/OAC/anon.txt";
const caminho = __dirname + "/notas.txt";
const axios = require("axios");
const fs = require("fs");

filtraNotas = (notas, idAlvo) => {
	let listaSplit = notas.split("\n");
	let nota = listaSplit[0].split(" ");
	let i = 0;
	while (nota[0] != idAlvo) {
		// console.log(nota[0]);
		i++;
		nota = listaSplit[i].split(" ");
	}
	let notaAluno = 0;
	while (idAlvo == listaSplit[i].split(" ")[0]) {
		notaAluno += parseInt(listaSplit[i].split(" ")[2]);
		i++;
	}
	return notaAluno;
};

axios.get(url).then((response) => {
	const posts = response.data;
	const idAluno = fs.readFileSync(caminho, "utf8");
	console.log(idAluno);
	let notaFiltrada = "Centavos: " + filtraNotas(posts, idAluno);
	fs.writeFileSync(caminho, notaFiltrada);
});
