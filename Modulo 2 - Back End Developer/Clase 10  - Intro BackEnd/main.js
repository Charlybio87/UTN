
/*
console.log('Hola mundo desde node.js');

for (let index = 0; index < 5; index++) {
  const element = index;  
  console.log(element);
}

// document DOM = document object model
// window hace referencia al BOM = browaer object model

console.log('Hola mundo')
console.error('Ocurrio una excepcion');
console.trace('Esta linea de codigo algo raro.')

const personas = [
  {
    name: 'pepe',
    age: 60
  },
  {
    name: 'pepe1',
    age: 64
  },
  {
    name: 'pepe2',
    age: 70
  },
  {
    name: 'pepe3',
    age: 80
  },
]
console.table(personas)
console.warn('Revisar cambiar esta varible')
console.info('Estamos en la version 20 de node')
console.aler
// tipos de console.* para usar javascript?
console.time('Tiempo de ejecución');
// Código a medir
console.time('Proceso');
// Simulación de un proceso
setTimeout(() => {
    console.timeEnd('Proceso');
}, 1000);
console.timeEnd('Tiempo de ejecución');*/

/*const result = require('./math.js')

const funcionTonta = require('./funcion.js')

const funciones = require('./funciones.js')

console.log(result);
console.log(result.ivaCalculo(50));

console.log(funcionTonta())

console.log(funciones);

// console.log(ivaCalculo(50));

// desestructuracion c/ agrega automaticamente
const {guardarDato3, eliminarDato3, actualizarDato3} =  require('./funciones3.js')

guardarDato3
eliminarDato3
actualizarDato3
*/

//Solo nos permitira trabajar con el index (a modo de no trabajar con el main.js)
require('./try-catch/index.js')