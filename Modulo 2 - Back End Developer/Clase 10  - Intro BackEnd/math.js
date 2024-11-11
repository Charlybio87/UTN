// Sumar: recibir a y b y devolver el resultado de la suma
// const sumar = function(a,b) {
//   return a + b
// }
// Iva: que recibira un numero y devolvera el iva del numero ingresado (21%)
// const ivaCalculo = funcion(sumar) {
//   return sumar*0.21
// }

let a = 10
let b = 20

const sumar = (a, b) => a + b;

const ivaCalculo = (sumar) => sumar * 0.21;


// en el package.json el type: commonjs
//module = objecto ue contiene los metodos e info del modulo en el cual estemos
module.exports = {
  nombre: 'pepe',
  ivaCalculo: ivaCalculo
}

