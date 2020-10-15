//factory
function criarProduto(nome, preco, desconto = 0.1) {
	return {
		nome,
		preco,
		desconto,
	};
}

console.log(criarProduto("Cadeira gamer barata", 600));
console.log(criarProduto("Cadeira gamer ULTRA LED", 1800, 0.5));

//
//
//

// classe
// escopo varia dependendo de onde foi executado

class Pessoa {
	constructor(nome) {
		// tem q declarar variavel com o this pra sser
		this.nome = nome;
	}

	// se n tiver o this ele vai pegar a variavel nome do global
	// nao acessa as variaveis locais, apenas o this e o global
	falar = () => console.log(`Meu nome é ${this.nome}`);
}

let nome = "GLOBALLLL";
const p1 = new Pessoa("juau da classe");
p1.falar();

// factory
// ele vai retornar o objeto, portanto o objeto vai ter o escopo de onde ele foi criado
const criarPessoa = (nome) => {
	// const nome2 = "O NOME DAQUI";
	return {
		falar: () => console.log(`Meu nome é ${nome}`),
	};
};

const p2 = criarPessoa("juau do factory");
p2.falar();

console.log(typeof p1, typeof p2);
