const valor = "Global";

// function minhaFuncao() {
// 	console.log(valor);
// }

// procura no escopo em q ela foi escrita, e nao onde foi executada
const minhaFuncao = () => {
	console.log(valor);
};

// function exec() {
// 	const valor = "Local";
// 	minhaFuncao();
// }

const exec = () => {
	const valor = "Local";
	minhaFuncao();
};

exec();
