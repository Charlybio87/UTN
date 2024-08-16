// let nombrePersona = 'pepe'
// let apellidoPersona = 'suarez'
// let edadPersona = 30

// Objeto literal
// const persona = {
//     'nombre': 'pepe',
//     'apellido': 'suarez',
//     'edad': 30,
//     'nroTelefono': '132456789',
//     'amigo': {
//         'nombre': 'maria',
//         'edad': 35,
//         'numerosPreferidos':['1','4','7']

//     }
// }

// // acceder a una propiedad
// //Notacion de '' (comillas)
// console.log(persona['nombre'])
// console.log(persona['amigo']['nombre']);
// console.log(persona['amigo']['numerosPreferidos']['1']);

// //Notacion de . (puntos)
// console.log(persona.nombre)
// console.log(persona.amigo.nombre);
// console.log(persona.amigo.numerosPreferidos[1]);

// persona.abuela = 'martha'
// let propiedadAModificar = prompt('Decime que queres modificar')
// let nuevoValor = prompt('Ingresar el nuevo valor: ')
// persona[propiedadAModificar] = nuevoValor

// console.log(persona)

//
// const persona = {
//     nombre: 'pepe',
//     apellido: 'suarez',
//     edad: 30,
//     nroTelefono: '132456789',
//     amigo: {
//         nombre: 'maria',
//         edad: 35,
//         numerosPreferidos: ['1','4','7']
//     }
// }

// //for in
// for (let propiedad in persona) {
//     console.log('El valor de la propiedad: ' + propiedad + ' es ' + persona[propiedad]);
    
// }

// const formularioLogin = {
//     'username':{
//         tipo: 'text',
//         placeholder: 'Ingrese un nombre'
//     },
//     'password':{
//         tipo: 'password',
//         placeholder: 'Ingrese una contraseña'
//     }
// }

// let formulario = ''
// for (let propiedad in formularioLogin) {
//     // formulario = formulario + '<input type="'+ formularioLogin[propiedad].tipo+ '">'

//     //Template string
//     formulario = formulario + `
//     <label>${formularioLogin[propiedad].label}</label>
//     <input type="${formularioLogin[propiedad].tipo}" placeholder="${formularioLogin[propiedad].placeholder}">`
// }
// document.write(formulario)

//Array de Objetos
const productos = [
    {
        nombre: 'tv samsung',
        id: 1,
        descripcion: 'lorem',
        precio: 10
    },
    {
        nombre: 'tv LG',
        id: 2,
        descripcion: 'lorem',
        precio: 15
    },
    {
        nombre: 'tv noblex',
        id: 3,
        descripcion: 'lorem',
        precio: 7
    }
]

console.log(productos[1]);
console.log(productos[1].nombre);

for (let producto of productos) {
    console.log(`
    El producto con id ${producto.id} 
    se llama ${producto.nombre}`);
}
