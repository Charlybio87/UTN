// Server HTTP 

import express from 'express'

//Crear una aplicacion express
const app = express()

//definir puerto
const PUERTO = 3000


//ejecutar esta accion cuando la app se este escuchando
app.listen(PUERTO,() => {
  console.log(`Aplicacion ejecutandose en: http://localhost:${PUERTO}/hello`)
})

//definir ruta para la pagina principal
app.get(
  '/hello', 
  (consulta, respuesta) => {
      //Consulta es un objeto con datos de la consulta
      //Respuesta es un objeto para emitir respuestas
      console.log('consulta recibida')
      respuesta.send('<h1>Hola desde express!!!</h1>')
  }
)

// app.get('/', (req, res) => {
//   res.send('Hola mundo')
//   })

  //method,headers,url?