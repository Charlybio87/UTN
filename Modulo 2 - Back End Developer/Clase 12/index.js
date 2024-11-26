// const filesystem = require('fs')

import filesystem from 'fs'


// Esto es una funcion/metodo asinc
// la callback se ejecuta cuando writeFile se termine de ejecutar

// filesystem.writeFile(
//   'pepe.txt',
//   'hola mundo', 
//   {encoding: 'utf-8'},
//   (error) => {
//     if (error) {
//       console.error('Error al escribir el archivo:', error);
//       } else {
//         console.log('se escribio el archivo')
//       }
//   }
// )

// filesystem.readFile(
//   'no-existe.txt', 
//   'utf-8',
//   (error, data) => {
//     if (error) {
//       console.error('Error al escribir el archivo:', error);
//       } else {
//         console.log('contenido:', data)
//       }
//   }
// )

// van a crear un archivo txt que se llame primer-valor.txt, pondran dentro 1
// van a crear un archivo txt que se llame segundo-valor.txt, pondran dentro 2
// luego van a llamar al valor del primer archivo y guardaran en una variable llamada primer_valor
// luego van a llamar al valor del segundo archivo y guardaran en una variable llamada segundo_valor
// luego van a sumar los valores de las variables primer_valor y segundo_valor y guardaran en
// un archivo resultado.txt 

filesystem.writeFile('primer-valor.txt','10',{encoding: 'utf-8'},
  () => {
    filesystem.writeFile('segundo-valor.txt','20',{encoding: 'utf-8'},
      () => {
        filesystem.readFile('primer-valor.txt','utf-8',
          (error, primer_valor) => {
            filesystem.readFile('segundo-valor.txt','utf-8',
              (error, segundo_valor) => {
                const resultado = Number(primer_valor) + Number(segundo_valor)
                filesystem.writeFile('resultado.txt', String(resultado),
                (error) => {
                  if (error) {
                    console.error('Error al escribir el archivo:', error);
                    } else {
                      console.log('se escribio el archivo resultado.txt')
                      console.info('Resultado: ', String(resultado));
                    }
                })
              })
          })
      })
  })


const sumaAsinc = async() => {
  await filesystem.promises.writeFile('primer-valor1.txt', '1', 'utf-8')
  await filesystem.promises.writeFile('segundo-valor1.txt', '2', 'utf-8')
  const primer_valor = await filesystem.promises.readFile('primer-valor1.txt','utf-8')
  const segundo_valor = await filesystem.promises.readFile('segundo-valor1.txt','utf-8')
  const resultado = Number(primer_valor) + Number(segundo_valor)
  await filesystem.promises.writeFile('resultado1.txt', String(resultado),'utf-8')
}

sumaAsinc()

const accionAsincronica = async () =>{
  const resultado = await filesystem.promises.writeFile('test.txt','hola','utf-8')
  const valor_archivo_test = await filesystem.promises.readFile('test.txt','utf-8')
  console.log(valor_archivo_test)
  console.log('Archivo creado')
}

accionAsincronica()
