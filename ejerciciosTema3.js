//Ejercicio 1
let lenguajeProg={
    nombre: "Java",
    categoria: "Orientado a objetos",
    interpretado: false,
    fechaCreacion: 1980,

    setCategoria:(categoria)=> this.categoria = categoria,
    setInterpretado:(interpretado)=> this.interpretado = interpretado,
    setNombre:(nombre)=> this.nombre = nombre,
    setFechaCreacion:(fecha)=> this.fecha = fecha,
    getInfoLenguaje:()=> lenguajeProg.nombre + " " + lenguajeProg.interpretado + " " + lenguajeProg.categoria + " " + lenguajeProg.fechaCreacion

}

//Ejercicio 2
class LenguajeProg {
    constructor(nombre, fecha){
        this.nombre = nombre,
        this.categoria = "categoria",
        this.interpretado = "interpretado",
        this.fecha = fecha
    }

    setNombre(nombre){
        return this.nombre;
    }

    setCategoria(categoria){
        return this.categoria;
    }

    setInterpretado(interpretado){
        return this.interpretado;
    }

    setFechaCreacion(fecha){
        return this.fecha;
    }


    getInfo(){
        return this.nombre + " " + this.categoria + " " + this.interpretado + " " + this.fecha;
    }
}
 let object = new LenguajeProg("Carlos", "11/10/2014");
 object.getInfo();

 //Ejercicio 4

 class Animal{
     constructor(especie, habitat, edadMaxAprox){
         this.especie = especie;
         this.habitat = habitat;
         this.edadMaxAprox = edadMaxAprox;
     }

     getAnimal(){
         return "Especie: " + this.especie + "Habitat: " + this.habitat + "Edad máxima aproximada: " + this.edadMaxAprox;
     }

     
 }
 class AnimalDomestico extends Animal {
     constructor(especie, habitat, edadMaxAprox, nombre, identificador, vacunado){
         super(especie, habitat, edadMaxAprox);
         this.nombre = nombre;
         this.identificador = identificador;
         this.vacunado = vacunado;
     }

     getAnimalDomestico(){
        return "Nombre: " + this.nombre + "Identificador: " + this.identificador + "Vacuno: " + this.vacunado + super.getAnimal();
     }
 }
 class AnimalSalvaje extends Animal {
    constructor(especie, habitat, edadMaxAprox, cautivo, peligroExtincion){
        super(especie, habitat, edadMaxAprox);
        this.cautivo = cautivo;
        this.peligroExtincion = peligroExtincion;
    }

    getAnimalSalvaje(){
        return "Cautivo" + this.cautivo + "En peligro de extinción" + this.peligroExtincion + super.getAnimal();
    }
 }

 //Ejercicio 5

 class Fecha {
     constructor (dias, mes, ano){
         this.dias = dias;
         this.mes = mes;
         this.ano = ano;
     }

     static fecha(){
        var fecha = new Date();
        var dia = fecha.getDate();
        var mes = fecha.getMonth() + 1;
        var ano = fecha.getFullYear();

       console.log(fecha);
     }
         
     
 }
 Fecha.fecha();

 //Ejercicio 6
 
 var arrayFechas = [new Fecha(12, 10, 2020), new Fecha(12, 09, 2018), new Fecha(12, 01, 2019), new Fecha(12, 04, 2001)];

arrayFechas.sort();

//Ejercicio 7

/*function notas (){
    var notas = prompt("Introduce las notas seperadas por comas:");
    if (isNAN(notas)) {
        var media = notas;
        return notas;        
    }
}
*/

function cubo(){
    var num;
    var cubo = prompt("Introduce un número:");
    if (isNAN(cubo)) {
        
    }else{
        return false;
    }

}




function numeros(){
    let numeros = prompt("Introduce tres números separados por comas");
    let arrayNumeros = numeros.split(",");

    const media = (array) => {
        let resultado = 0;
        for (let i = 0; i < array.length; i++) {
            resultado = resultado + array[i];
        }
        alert("La media de " + array + " es:\n" + (resultado / array.length));
    };

    media(arrayNumeros);

}



//Ejercicio 8

//Numero aleatorio entre 1 y 100
//Math.floor((Math.random() * numMax) + numMin);
Math.floor((Math.random() * 100) + 1);


//Numero máximo de 3 entre 1 y 100
function queso(){
    var numero1 = Math.floor((Math.random() * 100) + 1);
    var numero2 = Math.floor((Math.random() * 100) + 1);
    var numero3 = Math.floor((Math.random() * 100) + 1);

    Math.max(numero1, numero2, numero3);   

}


//Ejercicio 9

let fechaNacimiento1 = new Date ('2001-04-11');
let fechaNacimiento2 = new Date (2001, 3, 11);

console.log(fechaNacimiento1);
console.log(fechaNacimiento2);


fechaNacimiento2.setFullYear(2020);
console.log(fechaNacimiento2);


