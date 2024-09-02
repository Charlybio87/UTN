// Metodos de String

// let nombre = 'pepe'
// let mensaje= 'Hola a todos, como estan!?'
// console.log(nombre.length)  // 4
// console.log(nombre[0])      // p
// console.log(nombre.includes('e')); // true
// console.log(nombre.includes('P')); // false
// console.log(mensaje.includes('todo')) // true
// console.log(mensaje.toUpperCase())
// console.log(mensaje.toLowerCase())
// console.log(mensaje)
// mensaje = mensaje.toLowerCase()
// console.log(mensaje);

// let palabraBuscada = 'hOla'

// mensaje = mensaje.toLowerCase()
// palabraBuscada = palabraBuscada.toLowerCase()
// console.log(mensaje.includes(palabraBuscada)) // true

// let resulado = mensaje.toLowerCase().includes(palabraBuscada.toLowerCase())
// console.log(resulado);
// console.log(buscarPalabraEnString('ComO',mensaje))

// function buscarPalabraEnString (palabraBuscada,mensaje){
//     let stringLowerCase = string.toLowerCase()
//     let palabraBuscadaLowerCase = palabra.toLowerCase()
//     return stringLowerCase.includes(palabraBuscadaLowerCase)
// }

// let mensaje= 'Hola a todos, como estan?, todos estan bien?'
// console.log(mensaje.replace('todos', 'tod@s'))
// console.log(mensaje.replaceAll(' ', '-'))
// console.log(mensaje.trim());
// let nombre = 'pepe'
// console.log(nombre.repeat(5));
// console.log(nombre.charAt(3));
// console.log(mensaje.split(' '));
// let mensajeArray = mensaje.split(' ');
// console.log(`${mensajeArray.length}`);

// Arrow Function

// function verificarNumero (numero) {
//     return !isNaN(numero)
// }
const verificarNumero = (numero) => { return !isNaN(numero)} 

console.log(verificarNumero(10));
console.log(verificarNumero('pepe'));


