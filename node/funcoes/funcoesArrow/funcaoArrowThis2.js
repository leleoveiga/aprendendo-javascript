let comparaComThis = function (param) {
	return this === param;
};

console.log(" this === this :" + comparaComThis(this));

console.log(" this === global :" + comparaComThis(global));

const obj = {};

comparaComThis = comparaComThis.bind(obj);

console.log(" this bind === global :" + comparaComThis(global));

console.log(" this bind obj === obj :" + comparaComThis(obj));

let compareComThisArrow = (param) => this === param;

console.log(" this arrow === this :" + compareComThisArrow(this));

console.log(" this arrow === global :" + compareComThisArrow(global));

console.log(
	" this arrow === module.exports :" + compareComThisArrow(module.exports)
);

// this do arrow é sempre o mesmo
// o this dele ( escopo ) é o de onde ele foi escrito
