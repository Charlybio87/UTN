// for (
//     let i = 0/*Contador*/; 
//     i < 5/*Condicion*/ ;
//     i++/*Acumulacion*/) {
//         // alert(`${i+1}. Hola mundo!!!`)
//         console.log('Hola Mundo!!!');
// }

// alert('Sumatoria de 3 números: ')
// let resultado = 0
// for(let i = 0; i < 3 ; i++){
//     console.log(resultado);
//     resultado = resultado + Number(prompt('Ingrese un numero: '))
    
// }
// alert(`El valor de la sumatoria es: ${resultado}`)

// function saludar() {
//     console.log(`Hola como estas!?
// cabeza de termo!!`);
// }
// saludar();

// if (true) {
//     saludar();
// } else {
//     saludar();
// }


// function sumarMas2(numero1,numero2) {
//     console.log(`Resultado de la suma: ${numero1 + numero2}`);
// }
// sumarMas2(10,23);
// sumarMas2(10,100);
// sumarMas2(256,24);

function calculoiva(precio){
    let iva = 0.21
    let total = precio + (precio * iva)
    return(total)    
}
let precio = Number(prompt('Ingrese el precio del producto: '))
total = calculoiva(precio)

alert(`El precio total es: ` + total)

