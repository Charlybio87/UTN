// let nombre = prompt(`dime tu nombre: `)
// alert(`Hola ${nombre}!!`)
// // let edad = Number(prompt("cuantos años tienes:"))
// let edad = prompt("cuantos años tienes:")
// if (edad <= 18) {
//     alert(`${nombre} eres menor de edad!
//         no estas habilitado 🤥`)
// } else {
//     alert(`${nombre} eres mayor de edad!
//         estas habilitado 😎`)
// }

/*  */
// let numero = prompt(`ingresar un numero del 1 al 10`)
// if (numero > 0 && numero <= 10 ) {
//     alert("Dato Correcto ❤")
// } else {
//     alert("Dato Incorrecto💥")
// }

/*Solicitar rol de usuario */

// let user = prompt(`Ingrese su rol: `)
// if (user == "superadm") {
//     alert("Bienvenido de superadministrador")
// }else if (user == "adm") {
//     alert("Bienvenido al aministrador")
// }else if (user == "owner") {
//     alert("Opciones de dueño")
// }else if (user == "support") {
//     alert("lista de incidencia")
// }else{
//     alert("bienvenido")
// }

/*Solicitar al usuario un nombre y una edad

si el nombre es 'juan' decir 'bienvenido don juan
si el nombre es 'pepe'  y su edad es 21 decir 'pase don'
si la edad es mayor a 30 decir 'puede pasar'
si no es ninguno de los anteriores decir 'no puede pasar'*/

// let nombre = prompt(`Ingrese su nombre de usuario: `)
// let edad = Number(prompt("Ingrese su edad: "))

// if (nombre == "Juan") {
//     alert(`Bienvenido Don Juan!!`)
// } else if (nombre === "pepe" && edad === 21){
//     alert(`Pase Don`)
// }else if (edad >= 30) {
//     alert(`puede pasar...`)
// }else{
//     alert("No puede pasar!")
// }

// let i = 0;
// while (i <=2) {
//     alert(`${i+1} Hola mundo!!`)
//     i += 1;
// }

// let nombre = prompt('Ingresar nombre: pepe/juan')

// while (nombre == 'pepe' || nombre =='juan') { //mientras sea verdadero sigue en el ciclo white
//     if (nombre == 'pepe') {
//         alert(`Hola! ${nombre}`)
//         break
//     } else if(nombre == 'juan'){
//         alert(`Hola! ${nombre}`)
//         break
//     }
// }

/*isNaN */

let edad = Number(prompt("Ingrese su edad: "));
// if (!Number.isNaN(edad)) {
//     alert(`La edad es ${edad}`)
// }else{
//     alert(`No es un número`)
// }


while (edad < 0 || edad > 120) {
    alert("ERROR: fuera de rango")
    edad = prompt("Ingrese su edad: ")
}
alert(`La edad es ${edad}`)