/*Console */

// log

console.log("Hola, JavaScript!");

// error

console.error("Este es un mensaje de error.");
console.error("Error al conectarse a la base de datos: ", new Error("Conexión fallida."))

// warn
console.warn("Este es un mensaje de advertencia.");

// info
console.info("Este es un mensaje de información.");

// table

let data = [
    {name:"Charly",age:37},
    {name:"Juan",age:25},
]
console.table(data)

// group

console.group("Usuario: ")
console.log("Nombre_ charly");
console.log("Age: 37");
console.groupEnd()

// time

// console.time("Reloj 1")

// for(let i=0;i<1000;i++){

// }
// console.timeEnd("Reloj ")

// console.time("Reloj 2")

// for(let i=0;i<1000;i++){

// }
// console.timeEnd("Reloj")

//assert
let age = 17

console.assert(age >= 18, "Usuario debe ser ,ayor de edad.")

// count

console.count("click")
console.count("click")
console.count("click")
console.countReset("click")
console.count("click")
console.count("click")

// trace
function funcA() {
    funcB()
}
function funcB() {
    console.trace("Seguimiento de la ejecucion.")
}

funcA()

// clear

// console.clear()