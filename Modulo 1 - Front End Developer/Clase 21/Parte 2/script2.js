/*let button = document.getElementById('myButton');

button.addEventListener('click', function() {
    alert('Hola');
});*/

// const accion_1 = () => {
//     alert('Hola click')
// }

// const button2HTML = document.getElementById('btn-2')

// button2HTML.onclick = accion_1

// const button3HTML = document.getElementById('btn-3')

// // button3HTML.addEventListener('click', accion_1)
// button3HTML.addEventListener('dblclick',//atribute 
//     () => {
//         alert('Doble click')
//     }
// )

/* 
CONTADOR CON JS y HTML:
Debemos desarrollar la funcionalidad de este contador:
HTML inicial:
<div>
    <button id="btn-decrementar" >-</button>
    <span id="contador-text" >0</span>
    <button id="btn-incrementar" >+</button>
</div>

Funcionalidades:
Llamar al span y mostrar inicialmente el texto interno en 0
llamar al boton de suma y resta y les asociaran respectivamente sus funciones

CONSEJO:
-Cada vez que sume o reste debere actualizar el innerText del span
-Crear una variable global que contenga el valor del contador


Parte 2:

El contador no puede ser menor a 1, en caso de que el contador sea 1 deberemos hacer que NO se ejecute la resta

El contador no puede ser mayor de 10, en caso de que el contador sea 10 NO ejecutaremos la suma

Parte 3:

Vamos a agregar un span de error en el contador, el span incialmente esta vacio:

<div class="contador">
    <button id="btn-decrementar" >-</button>
    <span id="contador-text" >0</span>
    <button id="btn-incrementar" >+</button>
    <span class="error-text"></span>
</div>

Si el usuario intenta incrementar a mas de 10 o decrementar a menos de 1
el texto de el span de error debe mostrar: "El contador no puede ser mayor de 10" o "El contador no puede ser menor a 1" segun corresponda

Si el usuario luego de que le de el error deja de cometerlo, ejemplo:
le dio al mas cuando estaba en 10, se mostro el texto de error pero luego le dio al menos (ahora el contador vale 9) entonces el TEXTO DE ERROR DEBE SER '' otra vez

Funciones para pasar a numero un valor:
Number()
parseInt()
parseFloat()

Parte 4:

Asi como hicimos una funcion set para el contador
podriamos plantearlo para el mensaje de error

Crear un estado de error y una funcion setError para modificar el texto de error
*/



const buttonHTMLIncr = document.getElementById('btn-incrementar')
const buttonHTMLDecr = document.getElementById('btn-decrementar')
const spanHTML = document.getElementById('contador-text')
const mensajeError = document.getElementById('error-text')

let contador = 0
spanHTML.innerText = contador
mensajeError.innerText = ''


buttonHTMLIncr.addEventListener('click', () => {
    if (contador < 10) {
    contador++ 
    spanHTML.innerText = contador
    mensajeError.innerText = ''
    }else if(contador === 10){
        mensajeError.innerText = 'El contador ya alcanzo el maximo'
    }
    else{
        alert('El contador ya alcanzo el maximo')
    }
}
)
buttonHTMLDecr.addEventListener('click', () => {
    if (contador > 1){
    contador--
    spanHTML.innerText = contador
    mensajeError.innerText = ''
    }else if (contador === 1) {
        mensajeError.innerText = 'El contador ya alcanzo el minimo'
    }else{
        alert('El contador ya alcanzo el minimo')
    }
}
)