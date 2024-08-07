/*Ejercicio calculadora web:
Solicitar al usuario un numero (validar que sea numero)
Solicitar al usuario otro numero (validar que sea numero)
La validacion de numero consisite en verificar que el numero ingresado sea un numero valido (no nulo o '' (string vacio) en caso de no ser valido deberemos volver a solicitar un numero nuevamente
Solicitar al usuario una operacion ente ('+', '-', '*', '/')
Validar que la operacion seleccionada sea alguna de las operaciones disponibles, sino volver a solicitar indicando previamente 'Error: solicitud no valida'
Una vez ingresado los 3 datos deberemos operar en base a la operacion seleccionada
Ej
numero1 = 1
numero2 = 2
operacion= '+'
if(operacion === '+'){
	alert('El resultado de ' + numero1 + ' ' + operacion + '  ' + numero2 + ' es :  ' + (numero1 + numero2) 
}*/

alert("Bienvenido al Multiplicador Web!!")

let numero1 = Number(prompt("Ingrese el primer número: "))
while (isNaN(numero1)||numero1 =='') {
    alert("❗ Error: Debe ingresar un número")
    numero1 = Number(prompt("Ingrese el primer número: "))
}

let numero2 = Number(prompt("Ingrese el segundo número: "))
while (isNaN(numero2)||numero2 =='') {
    alert("❗ Error: Debe ingresar un número")
    numero2 = Number(prompt("Ingrese el segundo número: "))
}

let operacion = prompt("Ingrese la operacion (+, -, *, /): ")
while (operacion !== '+' && operacion !== '-' && operacion !== '*' && operacion !== '/') {
    alert("❗ Error: Solicitud no valida. Ingrese una de las siguientes operaciones: ")
    operacion = prompt("Ingrese la operacion (+, -, *, /): ")
}

if (operacion === '+') {
    alert('El resultado de ' + numero1 + ' ' + operacion + '  ' + numero2  + ' es :  ' + (numero1 + numero2))
} else if (operacion === '-') {
    alert('El resultado de ' + numero1 + ' ' + operacion + '  ' + numero2  + ' es :  ' + (numero1 - numero2))
} else if (operacion === '/') {
    alert('El resultado de ' + numero1 + ' ' + operacion + '  ' + numero2  + ' es :  ' + (numero1 / numero2))
}else{
    alert('El resultado de ' + numero1 + ' ' + operacion + '  ' + numero2  + ' es :  ' + (numero1 * numero2))
}

// alert(`${numero1},${numero2},${operacion}`)