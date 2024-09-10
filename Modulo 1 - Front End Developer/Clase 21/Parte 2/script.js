/** Document.getElementById
 * Buscar elemento y almacenar en variable*/

const buttonIncrem = document.getElementById('btn-incrementar')
const buttonDecrem = document.getElementById('btn-decrementar')
const spanContador = document.getElementsByClassName('contador-text')
console.log(spanContador)
const spanError = document.getElementById('error-text')

/** addEventListener
 * asigno evento 'click' a c/ boton */
buttonIncrem.addEventListener('click',incremDig)
buttonDecrem.addEventListener('click',decremDig)

/** Inicializacion
 * 
 */
let contador = 1
spanContador.innerText = contador
spanError.innerText = ''

/** CallBack
 * funciones de incremento/decremento
 * funcion de mensaje de Error 
 */

function incremDig() {
    if (contador < 10) {
        contador++
        spanContador.innerText = contador
        spanError.innerText = ''
    }else{
        setError('El contador no puede ser mayor a 10')
    }
}
function decremDig() {
    if (contador > 1) {
        contador--
        spanContador.innerText = contador
        spanError.innerText = ''
    } else {
        setError('El contador no puede ser menor a 1')
    }
}
function setError(mensajeError){
        spanError.innerText = mensajeError
}