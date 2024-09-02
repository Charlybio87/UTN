// let nombre = 'pepe'
// let apellido = 'suarez'
// let edad = 25

// console.log(`Hola, mi nombre es ${nombre + ' ' + apellido}`);
// console.log(`hola mi nombre es ${nombre}`);

// const clientes = {
//     nombre: 'juan',
//     apellido: 'lopez',
//     'edad actual': 30
// }

// console.log(`Hola, el cliente ${clientes.nombre +' '+clientes.apellido} de edad ${clientes["edad actual"]}`);

// console.log(Object.keys(clientes));
// console.log(Object.values(clientes));


let nombre = 'juan'

const usuarios_conectados = ['Profe UTN','charly','ale',nombre]

for (const usuario of usuarios_conectados){
    console.log(`Usuario: ${usuario}`)
}
// const persona = { 
//     nombre: 'Juan'
//     , edad: 30
//     , ciudad: 'Madrid' 
// }

const persona = [
    { 
    nombre: 'Profe UTN', 
    id: 1,
    isAdmin: true,
    isMute: false,
    isOnCamara: false,
    image: 'http://direccion-imagen.jpg'
    },
    { 
    nombre: 'Agusto', 
    id: 2,
    isAdmin: false,
    isMute: false,
    isOnCamara: false,
    image: 'http://direccion-imagen.jpg'
    },
    { 
    nombre: 'Alejandro', 
    id: 3,
    isAdmin: false,
    isMute: false,
    isOnCamara: false,
    image: 'http://direccion-imagen.jpg'
    },
    { 
        nombre: 'Sofía', 
        id: 4,
        isAdmin: false,
        isMute: true,
        isOnCamara: true,
        image: 'http://direccion-imagen-2.jpg'
    },
    { 
        nombre: 'Mateo', 
        id: 5,
        isAdmin: true,
        isMute: false,
        isOnCamara: true,
        image: 'http://direccion-imagen-3.jpg'
    }
]
persona.push({
    nombre: 'Charly', 
    id: 6,
    isAdmin: true,
    isMute: false,
    isOnCamara: true,
    image: 'http://direccion-imagen-3.jpg'
})
console.log(persona);

for (const usuario of persona) {
    console.log(`${usuario.nombre} esta conectado`);
}