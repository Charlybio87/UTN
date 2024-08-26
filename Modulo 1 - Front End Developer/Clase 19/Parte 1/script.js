// script.js
// import {sumar as add, nombre as name} from './math.js'
// console.log(add(1,2));
// console.log(name('Carlos'));


// CallBack
// const saludar = (nombre) => {
    //     alert("Hola! " + nombre)
    // }
    
// saludar(nombre)


// const solicitarDato = (mensaje, errorMensaje,validacion) => {
//     let dato = prompt(mensaje)
//     while (!validacion(dato)) {
//         dato = prompt(errorMensaje)
//     }
//     return dato
// }

// const validacionNombre = (valor) => {
//     return Boolean(valor && isNaN(valor) && !valor.includes('*'))
// }

// const validacionEdad = (valor) => {
//     return Boolean(valor && !isNaN(valor))
// }


// let nombre = solicitarDato(
//     'Ingrese el nombre',
//     'Error al ingresar nombre',
//     validacionNombre
// )
// let nombreEmpresa = solicitarDato(
//     'Ingrese el nombre de su Empresa',
//     'Error al ingresar nombre Empresa',
//     validacionNombre
// )
// let edad = solicitarDato(
//     'Ingrese la edad',
//     'Error al ingresar edad',
//     validacionEdad
// )
