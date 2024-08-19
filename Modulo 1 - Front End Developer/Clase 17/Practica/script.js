// const nombres = ['pepe', 'maria', 'pedro', 'juan', 'maria', 'maria']


// while(nombres.includes('maria')){
//     let posicionMaria = nombres.indexOf('maria')
//     nombres.splice(posicionMaria, 1)
// }

const nombres = ['Juan','María','Pedro','Juan','Sofía','Luis','María','Ana','Pedro','Juan','Sofía','Carlos','Luis','Ana','María','Pedro','Sofía','Juan','Luis','Ana'];
let cantidad

let nombre = 'Juan'
nombreAElimimar(nombres, nombre)
console.log(`1° Listado:
    ${nombres}
    se elimino el nombre: ${nombre} ${cantidad} veces.`)

nombre = 'Carlos'
nameToDelete(nombres,nombre)
console.log(`2° Listado:
    ${nombres}
    se elimino el nombre: ${nombre} ${cantidad} veces.`)
// for (let i = 0; i < nombres.length; i++) {
//     console.log(`  ${nombres[i]}`);
// }


function nameToDelete(nombres,nombre){
    cantidad = 0
    for (let i = 0; i < nombres.length; i++) {
        if (nombres[i] === nombre) {
            nombres.splice(nombres.indexOf(nombre),1)
            cantidad++
        }
    }
    return (nombres,cantidad)
}

function nombreAElimimar(nombres,nombre) {
    cantidad = 0
    // for (const nombre  of nombres) {
    //     console.log(nombre);
    //     if (nameToDelete === nombre) {
    //         nombres.splice(nombres.indexOf(nombre),1)
    //     }
    //     /*Se tiene un problema al usar for of para eliminar un elemento del arreglo
    //     cuando a se elimina el elemento siguiente toma su lucgar y no es analizado 
    //     por la condicion if */
    // }
    while (nombres.includes(nombre)) {
        nombres.splice(nombres.indexOf(nombre),1)
        cantidad++
    }
    return (nombres,cantidad)
}

