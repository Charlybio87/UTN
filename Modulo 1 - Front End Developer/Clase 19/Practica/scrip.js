// # Consigna: Crear y Gestionar un Historial con Arrays y Objetos en JavaScript

// En este ejercicio, vamos a crear un sistema básico de historial utilizando arrays y objetos en JavaScript. Imagina que tienes una lista de acciones que un usuario realiza en una aplicación, y quieres guardar esas acciones en un historial para poder verlas más tarde, eliminarlas individualmente o limpiar todo el historial.

// ## Objetivo

// - **Crear un historial** donde se puedan agregar, eliminar por ID y eliminar todas las acciones.
// - **Usar métodos avanzados de arrays** como `filter`, `find`, y `findIndex` para gestionar el historial.

// ## Tareas

// 1. **Crear una estructura de datos para el historial**:
//    - El historial será un array llamado `historial`, que al principio estará vacío.
//    - Cada acción en el historial será un objeto con las siguientes propiedades:
//      - `id`: un número que identifica de forma única cada acción.
//      - `descripcion`: una breve descripción de la acción.
//      - `fecha`: la fecha y hora en que se agregó la acción.

// 2. **Crear funciones para gestionar el historial**:
//    - **Agregar una nueva acción al historial**: Esta función tomará un `id` y una `descripcion`, y los agregará como un nuevo objeto al array `historial`. Debe registrar también la fecha y hora actuales. (esto lo podemos hacer con new Date().toISOString() ) 
//    - **Eliminar una acción del historial por ID**: Esta función tomará un `id` como parámetro y eliminará la acción que tenga ese `id` del historial.
//    - **Eliminar todo el historial**: Esta función borrará todas las acciones del historial, dejando el array vacío.

// 3. **Crear una función para mostrar el historial**:
//    - Esta función imprimirá en la consola todas las acciones del historial, mostrando su `id`, `descripcion`, y `fecha`.


function agregarAccion(){
    id++
    let descripcion = prompt("Ingrese la descripción de la acción");
    let fecha = new Date().toISOString();
    let nuevaAccion = {id, descripcion, fecha};
    historial.push(nuevaAccion);
    return alert("Accion agregada con exito");
    
}
function eliminarAccion(idDelete){
    let index = historial.findIndex(objeto => objeto.id === idDelete)
    if(index !== 0){
        historial.splice(index, 1)
        return alert("Accion eliminada con exito");
    }else{
        return alert("No se encontró la acción con el id ingresado");
    }
}
function borrarAccion(){
    historial.splice(1,historial.length)
    return alert("Accion eliminada con exito");
}

function mostrarHistorial(historial){
    for (let i = 0; i < historial.length; i++) {
        alert(`
            ID: ${historial[i].id}
            Descripción: ${historial[i].descripcion}
            Fecha: ${historial[i].fecha}`
            )
        console.log(`ID: ${historial[i].id} - Descripción: ${historial[i].descripcion} -
            Fecha: ${historial[i].fecha}`
            )
    }
    return
}

const historial = [{
    id: 0,
    descripcion: "Acción inicial",
    fecha: new Date().toISOString(),
}]

let id = 0;
let opcion = 0
let seguir = true
while (seguir){
    opcion = Number(prompt(`Gestión de Historial:
        1. Agrega Acción
        2. Eliminar Acción
        3. Borrar Historial
        4. Mostrar Historial
        5. Salir `))
    
    switch (opcion) {
        case 1:
            agregarAccion()
            break;
        case 2:
            let idDelete = Number(prompt('Ingrese el id que desea eliminar: '))
            eliminarAccion(idDelete)
            break;
        case 3:
            borrarAccion()
            break;
        case 4:
            mostrarHistorial(historial)
            break;
        case 5:
            seguir = false 
            break;   
        default:
            alert("Opción no válida")
            break;
    }
}