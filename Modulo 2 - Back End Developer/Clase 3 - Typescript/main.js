// let nombre1 = '0'
// nombre1= 'pepe'
// definicion de datos explicito
var nombre = 'pepe';
var edad = 25;
console.log(nombre);
var statusEmai = null;
var mostrarSttus = function () {
    console.log(statusEmai);
};
setTimeout(function () {
    statusEmai = true;
    mostrarSttus();
}, 1000);
mostrarSttus();
var calcularIva = function (precio) {
    return precio * 0.21;
};
var suma = function (a, b) { return a + b; };
var resultado = suma(1, 1);
function doSomething() {
    alert('Algo');
}
function buscarAlgo() {
    var resultado;
    return resultado;
}
console.log(doSomething());
console.log(calcularIva(10));
// const persona : {nombre:string, edad:number, id:number} = {
//   nombre: 'pepe',
//   edad: 25,
//   id: 1
// }
var persona = {
    nombre: 'pepe',
    edad: 25,
    id: 1
};
// const saludarPersona = (persona : {nombre:string, edad:number, id:number}) : void => {
//   console.log('Hola ' + persona.nombre);
// }
var saludarPersona = function (persona) {
    console.log('Hola ' + persona.nombre);
};
saludarPersona(persona);
var resta = function (_a) {
    var numMay = _a.numMay, numMen = _a.numMen;
    return numMay - numMen;
};
resta({ numMay: 1, numMen: 2 });
