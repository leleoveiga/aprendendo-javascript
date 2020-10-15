// closure é um escopo criado quando a função é decladara
// esse escopo permite a função acessar e manipular as variáveis externas

const x = "global";

const fora = () => {
	const x = "local";
	const dentro = () => {
		return x;
	};
	return dentro;
};

const minhaFuncao = fora();

console.log(minhaFuncao());
