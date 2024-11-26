
//try intenta resolver un bloque de codigo

// try {
//   console.log(hola);
  
// } catch (error) {
//   console.error('Se produjo un error: ' + '😫' );
  
// }

// console.log('Operacion super importante: ' + '😎');

// CREAR DOS FUNCIONES proceso1 y proceso2
// AMBAS FUNCIONES DEBEN TERN UN TRY CATCH DENTRO
// AMBAS FUNCIONES SOLO DIRAN POR CONSOLA, PROCESO 1 O 2 DEPENDIENDO DE QUE PROCESO ES ESA FUNCION
//proceso1 INTENCIONALEMENTE TENDRA UN ERROR
//INVOCAR AMBAS FUNCIONES SE EJECUTEN.



const procesos1 = () => {
  try {
    console.log(resultado) // llama algo que aun no existe
    const resultado = [[]]
  } catch (error) {
    console.error('Se produjo un error: ' + '😫' )
  }
}

const procesos2 = () => {
  try {
    console.log('Proceso 2:' + '😎');
  } catch (error) {
    console.error('Se produjo un error: ' + '😫' )
  }
}
procesos1()
procesos2()


module.exports = {}