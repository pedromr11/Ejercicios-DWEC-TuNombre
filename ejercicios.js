
//Ejercicio 5 Tema 2

let numero = Number(prompt("Introduce un número "));
let base = numero;
const cubo = function(base) {
 return base * base * base;
};
alert("El cubo de " + base + " es " + cubo(numero));



let numero = Number(prompt("Introduce un número "));
let base = numero;
const cubo = (base) => {
 return base * base * base;
};
alert("El cubo de " + base + " es " + cubo(numero));




let numero = Number(prompt("Introduce un número "));
let base = numero;
const cubo = base => base * base * base;
alert("El takefusa kubo de " + base + " es " + cubo(numero));



//Ejercicio 6 Tema 2

//6.1
let arrayNotas = [1, 4, 5, 6, 7, 8, 9, 2, 3, 10, 0, 5, 7];
let notasAprobadas = arrayNotas.filter(nota => nota > 5);
console.log(notasAprobadas);

//6.2
let posicion = arrayNotas.findIndex(nota => 5,5);
console.log(posicion);

//6.3
let todasAprobadas = arrayNotas.every(nota => nota => 5.5);
console.log(todasAprobadas);

//6.4


