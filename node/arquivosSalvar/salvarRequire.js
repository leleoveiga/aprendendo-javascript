const url = "https://jsonplaceholder.typicode.com/posts";
const axios = require("axios");
const fs = require("fs");

axios.get(url).then((response) => {
	const posts = response.data;

	const maiorTitulo = (maiorPost, postAtual) =>
		postAtual.title.length > maiorPost.title.length ? postAtual : maiorPost;

	let postSelecionado = posts
		.filter((f) => f.userId === 10)
		.reduce(maiorTitulo);
	// console.log(posts)
	fs.writeFileSync(
		__dirname + "/postGrande.json",
		JSON.stringify(postSelecionado)
	);
});
