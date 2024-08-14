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