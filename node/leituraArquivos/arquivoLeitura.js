const fs = require('fs')


const caminho = __dirname + '/arquivo.json'

// síncrono
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

// assíncrono
fs.readFile(caminho, 'utf-8', (err, Arquivojson) => {
    const config = JSON.parse(Arquivojson)
    console.log(`isso aqui executou depois: ${config.db.host}:${config.db.port}`)
})

// simplificando a leitura de um json de forma síncrona
const config = require('./arquivo.json') // importa ja como objeto
console.log(`isso aqui executou antes: ${config.db.host}:${config.db.port}`)

// __dirname é o caminho até aqui
fs.readdir(__dirname, (err, arquivos) => {
    console.log('Conteúdo da pasta: ')
    console.log(arquivos)
})