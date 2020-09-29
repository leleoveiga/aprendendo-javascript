const moduloA = require('../../moduloA')
const moduloB = require('../../moduloB')

console.log(moduloA.iae);
console.log(moduloA.blz);
console.log(moduloA.xau);

const index = require('./pastaC/index.js')

const http = require('http');
http.createServer((req, res) => {
    res.write('Iae fellas\n'),
        res.write(index.iae),
        console.log(index),
        res.end()
}).listen(8080)