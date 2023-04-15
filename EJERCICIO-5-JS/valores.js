let altura = 171;
let altura_m = 1.71;
let peso = 72.3;

const altura_b= Math.ceil(altura_m)
console.log(altura_b); // imprime: 2

const peso_a = Math.floor(peso);
console.log(peso_a); //imprime; 72

const valores = Number.MAX_VALUE + 1 === Number.MIN_VALUE;

console.log(valores);
//imprime falso