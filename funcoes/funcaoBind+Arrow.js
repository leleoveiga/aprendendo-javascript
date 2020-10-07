// let idade = 5;
function Pessoa() {
	//escopo da funcao, eu acho
	this.idade = 0;

	setInterval(function () {
		this.idade++;
		console.log(this.idade + " normal");
	}, 1000);
}

function PessoaBind() {
	this.idade = 0;

	setInterval(
		function () {
			this.idade++;
			console.log(this.idade + " bind");
		}.bind(this),
		1000
	);
}

function PessoaSelf() {
	this.idade = 0;

	const self = this;

	setInterval(function () {
		self.idade++;
		console.log(self.idade + "  self");
	}, 1000);
}

function PessoaArrow() {
	this.idade = 0;

	setInterval(() => {
		this.idade++;
		console.log(this.idade + " arrow");
	}, 1000);
}
// usam o mesmo escopo
const pessoaConta = Pessoa;
const pessoaContaBind = PessoaBind;
const pessoaContaSelf = PessoaSelf;
const PessoaContaArrow = PessoaArrow;

// usam escopos individuais
new Pessoa();
new PessoaBind();
new PessoaSelf();
new PessoaArrow();

// comecam com undefined por algum motivo
// console.log(pessoaConta());
// console.log(pessoaContaBind());
// console.log(pessoaContaSelf());
// console.log(PessoaContaArrow());
