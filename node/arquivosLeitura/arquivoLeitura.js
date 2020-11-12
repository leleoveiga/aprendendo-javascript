const fs = require("fs");

const caminho = __dirname + "/arquivo.json";

// síncrono
const conteudo = fs.readFileSync(caminho, "utf-8");
console.log(conteudo);

// assíncrono
fs.readFile(caminho, "utf-8", (err, Arquivojson) => {
	const config = JSON.parse(Arquivojson);
	console.log(`isso aqui executou depois: ${config.db.host}:${config.db.port}`);
});

// leu o conteúdo do diretório atual pelo __dirname (retorna o caminho ate o diretorio atual)
// de forma assíncrona
fs.readdir(__dirname, (err, arquivos) => {
	console.log("Conteúdo da pasta assíncrona: ");
	console.log(arquivos);
});

// simplificando a leitura de um json de forma síncrona
const config = require("./arquivo.json"); // importa ja como objeto
console.log(`isso aqui executou antes: ${config.db.host}:${config.db.port}`);
