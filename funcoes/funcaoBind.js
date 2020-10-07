const pessoa = {
	//escopo do objeto
	nome: "Leonardo",
	falar() {
		//pega nome no escopo global
		return this.nome;
	},
};

const pessoaFalarBind = pessoa.falar.bind(pessoa);

const pessoaFalar = pessoa.falar;

console.log(pessoa.falar() + " ---- escopo referenciado");
console.log(pessoaFalarBind() + " ---- escopo do bind");
console.log(pessoaFalar() + " ---- escopo global");
