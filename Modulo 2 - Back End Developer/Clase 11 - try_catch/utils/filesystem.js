// llamamos un modulo nativo de node.sj para manipular el sistema de archivo
const { info } = require('console');
const filesystem = require('fs')

// Escribe un archivo de forma sincronica
/*filesystem.writeFileSync(
  './data/test-2.md', 
  `# Hola mundo desde node.js
  * Lista
    * (Aqui es donde se va escribir!)
  `, 
  {
    encoding:'utf-8'
  }
)
console.log('Archivo creado!');*/

// elimina archivo de forma sincronica
// filesystem.unlinkSync('test.txt')
/*
let usuario = {
  nombre: 'charly',
  edad: 25,
  nivel: 4
}

filesystem.writeFileSync(
  './data/usuario-config.json',
  JSON.stringify(usuario), //escribir un string con formato JSON
  {
    encoding: 'utf-8',
  }
)*/

// lee archivo de forma sincronica
/*const contenido = filesystem.readFileSync('./data/test-2.md', 'utf-8')
const configuracion_usuario = filesystem.readFileSync('./data/usuario-config.json', {encoding: "utf-8"})

console.log(contenido)
console.log(typeof configuracion_usuario) // es un string con formato JSON
console.log(JSON.parse(configuracion_usuario)) // lo convierte a un objeto JSON

console.log('Archivo creado!');*/

// Tarea 
// Crear 3 funciones:

// 1. crearArchivoJSON(carpeta, nombre, data)
// Nos debera  crear un archivo json con la data pasada por parametro

const crearArchivoJSON = (carpeta, nombre, data) => {
  try {
    filesystem.writeFileSync(`./${carpeta}/${nombre}.json`, (data), { encoding: 'utf-8' })
    console.info(`Ruta: ./${carpeta}/${nombre}.json`)
  } catch (error) {
    console.error('Error al crear archivo JSON:',error.message)
    if(error.code === 'ENOENT'){
      console.warn(`La carpeta NO Existe, revise la ruta: ./${carpeta}/${nombre}.json`)
    }else if (error.code === 'EEXIST') { // Manejo del error EEXIST (el archivo ya existe)
      console.warn(`El archivo ya existe: ./${carpeta}/${nombre}.json`);
    }else{
      console.error(`Error al crear el archivo`)
    }
  }
}

// 2. leerArchivoJSON(carpeta, nombre)
// Nos debera devolver el contenido del archivo json
const leerArchivoJSON = (carpeta, nombre) => {
  try {
    const contenido = filesystem.readFileSync(`${carpeta}/${nombre}.json`, {encoding: 'utf-8'})
    console.log(`Contenido del archivo: ${carpeta}/${nombre}.json`)
    return console.info(JSON.parse(contenido))
  } catch (error) {
    console.error(`Error al leer el archivo: ${error.message}`)
    if(error.code === 'ENOENT'){
      console.warn(`No puede leerse algo que no existe, revise la ruta: ./${carpeta}/${nombre}.json`)
    }else{
      console.error(`Error al leer el archivo`)
    }
  }
}

// 3. eliminarArchivoJSON(carpeta, nombre)
// Nos debera eliminar el archivo json
const eliminarArchivoJSON = (carpeta, nombre) => {
  try {
    filesystem.unlinkSync(`./${carpeta}/${nombre}.json`)
    console.info(`Archivo eliminado: ./${carpeta}/${nombre}.json`)
  } catch (error) {
    console.error(`Error al eliminar el archivo: ${error.message}`)
    if(error.code === 'ENOENT'){
      console.warn(`No puede ser eliminado algo que no existe: ./${carpeta}/${nombre}.json`)
    }else{
      console.error(`Error al eliminar el archivo`)
    }
  }
}


module.exports = {}


// crearArchivoJSON('Mundo',
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
// crearArchivoJSON('Mundo',
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
// leerArchivoJSON('Mundo','humano')
// leerArchivoJSON('Mundo','animales')
// eliminarArchivoJSON('Mundo','humano')

crearArchivoJSON('Mundo', 'humano', `{"nombre": "Juan Pérez", "edad": 30}`);
crearArchivoJSON('Mundo', 'humano', `{"nombre": "Juan Pérez", "edad": 30}`);
console.log('Llegaste: 😎');


module.exports = 
{
  crearArchivoJSON,
  leerArchivoJSON,
  eliminarArchivoJSON
}
