
const consultaDePrueba = async () => {
  try {
    const response = await fetch(ENVIROMENT.API_URL + '/api/status/ping',
      {
        method: 'GET',

      }
    )
    // Response es la respueta HTTP
    console.log(response)
    const data = await response.json()
    console.log('Respuesta del backend: ', data)
    
  } catch (error) {
    console.error('Error al consultar: ',error)
  }
}
