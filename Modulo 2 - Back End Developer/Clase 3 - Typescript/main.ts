// let nombre1 = '0'
// nombre1= 'pepe'
// definicion de datos explicito
let nombre : string = 'pepe'
let edad : number = 25

console.log(nombre)

let statusEmai : null | boolean = null 

const mostrarSttus = () => {
  console.log(statusEmai);
  
}
setTimeout(
  () => {
    statusEmai = true
    mostrarSttus()
  },
  1000
)

mostrarSttus()

const calcularIva = (precio : number) : number => {
  return precio * 0.21
}

const suma = (a: number, b: number) : number => a + b;

let resultado : number = suma(1,1)

function doSomething () : void {
  alert('Algo')
}
function buscarAlgo() : string | undefined {
  let resultado : string | undefined
  return resultado
}

console.log(doSomething());
console.log(calcularIva(10));

interface Persona {
  nombre: string;
  edad:number;
  id:number
}

// const persona : {nombre:string, edad:number, id:number} = {
//   nombre: 'pepe',
//   edad: 25,
//   id: 1
// }
const persona : Persona = {
  nombre: 'pepe',
  edad: 25,
  id: 1
}

// const saludarPersona = (persona : {nombre:string, edad:number, id:number}) : void => {
//   console.log('Hola ' + persona.nombre);
// }

const saludarPersona = (persona : Persona) : void => {
  console.log('Hola ' + persona.nombre);
}

saludarPersona(persona)

const resta = ({numMay, numMen} : {numMay: number, numMen: number}) : number => {
    return numMay - numMen
}

resta ({numMay: 1, numMen:2})