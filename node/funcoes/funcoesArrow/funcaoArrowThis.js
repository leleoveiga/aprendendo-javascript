function Pessoa() {
	this.idade = 0;

	setInterval(() => {
		this.idade++;
		console.log(this.idade);
	}, 1000);
}

new Pessoa();

// this do arrow é sempre o mesmo
