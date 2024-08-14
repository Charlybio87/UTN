// const nombres = ['carlos','alberto','pepe','maria']

// for (let i = 0; i < nombres.length; i++) {
//     console.log(nombres[i])
//     alert(nombres[i])
// }

// const numeros = [2, 3, 5, 7, 11];
// let acum = 0
// for(let i = 0; i < numeros.length; i++){
//     acum += numeros[i]
// }
// console.log(acum)
// alert("el promedio es: " + acum/numeros.length)

// const nombres = ['carlos','alberto','pepe','maria']

// for (let nombre of nombres){
//     console.log(nombre);
//     alert(nombre);
// }

// const numeros = [2, 3, 5, 7, 11];
// let acum = 0;
// for(let numero of numeros){
//     acum += numero;
// }
// console.log(acum/numeros.length);
// alert(acum/numeros.length);


/*Metodos de Arrays*/
const nombres = ['Juanito']

let nombre = prompt('Ingresa el nombre: ')
nombres.push(nombre)
console.log(nombres)

nombre = prompt('Ingresa el nombre: ')
nombres.unshift(nombre)
console.log(nombres);

nombres.pop()
console.log(nombres);

nombres.shift()
console.log(nombres);

console.log(nombres.includes('Juanito'));



