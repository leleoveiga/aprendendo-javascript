console.log('module.exports === this:-------' + (module.exports === this));
console.log('module.exports === exports:----' + (module.exports === exports));
console.log('this === exports:--------------' + (this === exports));

console.log(this);

this.a = 1;
exports.b = 2;
module.exports.c = 3;

exports = null;

console.log('-------- entidades --------')
console.log(this);
console.log(exports);
console.log(module.exports);
console.log('- - - - - - - - - - - - - - ')

console.log('module.exports === this:-------' + (module.exports === this));
console.log('module.exports === exports:----' + (module.exports === exports));
console.log('this === exports:--------------' + (this === exports));

exports = teste()


console.log('-------- entidades --------');
console.log(this);
console.log(exports);
console.log(module.exports);
console.log('- - - - - - - - - - - - - - ');

function teste() {
    return true;
}


// se nao tiver isso, exporta tudo automaticamente
module.exports = {
    /* testar sem esse module.exports 
                      na classe exportarCliente */
    a: 28,
    nome: 'Teste'
}