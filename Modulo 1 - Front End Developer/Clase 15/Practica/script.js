let opcion= Number(prompt(`Seleccione la actividad a realizar:
    1. Funcion de Sumatoria
    2. Funcion de Saludo
    3. Funcion de Seleccion
    4. Salir`))

opcion = verificacion(opcion)

while (opcion!== 4) {
    if (opcion === 1) {
        let cantidad = Number(prompt("Ingrese la cantidad de sumas: "));
        resultado = sumatoria(cantidad);
        alert("La suma es: " + resultado);
    } else if (opcion === 2) {
        let miNombre = prompt(`Bienvenido! Como te llamas!?: `);
        while (!miNombre || !isNaN(miNombre) || (miNombre.length < 3)) {
            alert("❗ Error: Debe ingresar un nombre")
            miNombre = prompt(`Bienvenido! Como te llamas!?: `)
        }
        alert(saludar(miNombre));
    } else if (opcion === 3){
        let operador = prompt(`Ingrese operador: `);
        alert("ud a escogido: " + seleccionar(operador));
    }
    opcion= Number(prompt(`Seleccione la actividad a realizar:
    1. Funcion de Sumatoria
    2. Funcion de Saludo
    3. Funcion de Seleccion
    4. Salir`))
    opcion = verificacion(opcion);
}

function seleccionar(operador) {
    if (operador === 'sumar'|| operador === '+' || operador === 'add') {
        return('SUMAR')
    } else if (operador === 'multiplicar'|| operador === '*' || operador === 'multiply') {
        return('MULTIPLICAR')
    } else if ((operador === 'restar'|| operador === '-' || operador === 'subtract')) {
        return('RESTAR')
    } else {
        return('NULL')
    }
}

function saludar(miNombre) {
    return(`Hola ${miNombre}!`)
}

function sumatoria(cantidad) {
    let resultado = 0;
    for (let i = 0; i < cantidad; i++) {
        let aux = Number(prompt("Ingrese el " + (i+1) + "°. numero:"))
        resultado += aux;
    }
    return(resultado)
}

function verificacion(opcion) {
    while (!opcion || isNaN(opcion) || opcion < 1 || opcion > 4) {
        alert("❗ Error: Debe ingresar un número")
        opcion= Number(prompt(`Seleccione la actividad a realizar:
        1. Funcion de Sumatoria
        2. Funcion de Saludo
        3. Funcion de Seleccion
        4. Salir`))
    }
    return(opcion)            
}