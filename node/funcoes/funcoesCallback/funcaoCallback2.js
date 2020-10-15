const notas = [6.6, 4.2, 5.7, 9.8, 10, 7.1, 8.0];

// sem callback

const notasBaixas = [];
for (let i in notas) {
	if (notas[i] < 7) {
		notasBaixas.push(notas[i]);
	}
}

console.log(notasBaixas);

// com callback
const notasBaixas2 = notas.filter((nota) => nota < 7);

console.log(notasBaixas);

const notasBaixas3 = notas.filter((nota) => nota > 7 && nota < 10);

console.log(notasBaixas3);

const notasAltasMasNemTanto = (nota) => nota > 7 && nota < 10;

const notasBaixas4 = notas.filter(notasAltasMasNemTanto);

console.log(notasBaixas4);
