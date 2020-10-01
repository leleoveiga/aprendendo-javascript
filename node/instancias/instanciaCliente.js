const instanciaNova = require("./instanciaNova");

const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

const contadorC = require('./instanciaNova')()
const contadorD = require('./instanciaNova')()

contadorA.inc()
contadorA.inc()

console.log(contadorB.valor, contadorA.valor)

contadorC.inc()
contadorC.inc()

console.log(contadorD.valor, contadorC.valor)

console.log(contadorA)
console.log(contadorB)
console.log(contadorC)
console.log(contadorD)