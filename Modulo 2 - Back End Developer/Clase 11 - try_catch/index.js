const filesystem = require('./utils/filesystem.js')





/* let usuarios = []
// try {
//   let usuario = null

//   // usuario.nombre
//   // hola
//   let id_buscado = 1
//   if(!id_buscado){
//     throw(
//       {
//         message: 'No hay id buscado',
//         name: 'INVALID_ID'
//       }
//     )
//     console.log('pepito');
    
//   }
//   const usuario_encontrado = usuarios.find(usuario => usuario.id === 2)
//   if(!usuario_encontrado){
//     throw(
//       {
//         message: 'Usuario no encontrado',
//         name: 'USER_NOT_FOUND'
//       }
//     )
//   }
// } 
// // Especie de callback que se ejecutara cuando se lance un error
// catch (error) { //solo el error por sintaxis no se mostrara.

//   console.log(error);
  
//   console.log(error.message); 
//   if (error.name === 'INVALID_ID') {
//     console.log('Mail de reporte');
//   } else if(error.name === 'USER_NOT_FOUND'){
//   }
// }
// finally{
//   console.log('Operacion de busqueda de usuario finalizada');
  
// }

// console.log('Operacion importe 2');*/

/**
 * @filesystem.* permite ejecutar funciones del filesystem.js 
 */
// filesystem.crearArchivoJSON('Mundo',
//   'humano',
//   `{
//   "nombre": "Juan Pérez",
//   "edad": 30,
//   "género": "masculino",
//   "ocupación": "desarrollador de software",
//   "habilidades": [
//     "JavaScript",
//     "Python",
//     "HTML",
//     "CSS"
//   ],
//   "dirección": {
//     "calle": "Av. Siempre Viva",
//     "número": 742,
//     "ciudad": "Springfield",
//     "país": "EE.UU."
//   },
//   "contacto": {
//     "email": "juan.perez@example.com",
//     "teléfono": "+1-555-1234"
//   }
// }`)
// filesystem.crearArchivoJSON('Mundo',
//   'animales',
//   `{
//   "animales": [
//     {
//       "nombre": "Perro",
//       "especie": "Canis lupus familiaris",
//       "edad": 5,
//       "raza": "Labrador",
//       "caracteristicas": {
//         "color": "Amarillo",
//         "tamaño": "Mediano",
//         "peso": 30
//       }
//     },
//     {
//       "nombre": "Gato",
//       "especie": "Felis catus",
//       "edad": 3,
//       "raza": "Siames",
//       "caracteristicas": {
//         "color": "Blanco con manchas negras",
//         "tamaño": "Pequeño",
//         "peso": 10
//       }
//     },
//     {
//       "nombre": "Elefante",
//       "especie": "Loxodonta africana",
//       "edad": 25,
//       "raza": "Africano",
//       "caracteristicas": {
//         "color": "Gris",
//         "tamaño": "Grande",
//         "peso": 6000
//       }
//     }
//   ]
// }`)
// filesystem.leerArchivoJSON('Mundo','humano')
// filesystem.leerArchivoJSON('Mundo','animales')
// filesystem.eliminarArchivoJSON('Mundo','humano')