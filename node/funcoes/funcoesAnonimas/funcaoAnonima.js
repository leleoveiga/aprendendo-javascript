const soma = function (x, y) {
	return x + y;
};

const imprimirResultado = function (x, y, operacao = soma) {
	console.log(operacao(x, y));
};

imprimirResultado(5, 2);

imprimirResultado(5, 2, function (x, y) {
	return x - y;
});

imprimirResultado(5, 2, (x, y) => x * y);

const pessoa = {
	falar() {
		console.log("essa eh uam funcao anonima");
	},
};

pessoa.falar();
