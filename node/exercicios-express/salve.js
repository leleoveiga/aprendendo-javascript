function salve(nome) {
	return function (req, res, next) {
		console.log(`Salve ${nome} !`);
		next();
	};
}

module.exports = salve;
