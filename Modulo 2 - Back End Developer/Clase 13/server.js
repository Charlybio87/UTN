// Server HTTP 

import express from 'express'

//Crear una aplicacion express
const app = express()

//definir puerto
const PUERTO = 3000
// no usar puerto: 21 22 80 443 3306 27017

//ejecutar esta accion cuando la app se este escuchando
app.listen(PUERTO, () => {
  console.log(`Aplicacion ejecutandose en: 
    http://localhost:${PUERTO}/test
    http://localhost:${PUERTO}/ping
    http://localhost:${PUERTO}/products`)
})

//Get es un metodo HTTP
//definir ruta para la pagina principal
app.get(
  '/test', 
  (consulta, respuesta) => { // (request, response)
      //Consulta es un objeto con datos de la consulta
      //Respuesta es un objeto para emitir respuestas
      console.log('consulta recibida: test')
      respuesta.send(`
        <h1>Consulta RECIBIDA</h1>
        <h2>Pruebas desde postman</h2>`)
  }
)

app.get(
  '/ping',
  (request, response) => {
    response.json(
      {
        mensaje: `Consulta PING`,
        ok: true,
        status: 200,
        data: null,
      }  
    )
    console.log('consulta recibida: ping')
  }
)

const products = [
{
  id: 1,
  name: 'producto 1',
  price: 10,
  marca: 'samsung'
},
{
  id: 2,
  name: 'producto 2',
  price: 5,
  marca: 'apple'
},
{
  id: 3,
  name: 'producto 3',
  price: 7,
  marca: 'xiaomi'
},
{
  id: 4,
  name: 'producto 4',
  price: 12,
  marca: 'samsung'
},
{
  id: 5,
  name: 'producto 5',
  price: 4,
  marca: 'apple'
},
{
  id: 6,
  name: 'producto 6',
  price: 10,
  marca: 'xiaomi'
}
]

app.get('/products',  (req,resp) => {

  //queremos obtener el query param 'marca'
  const marca = req.query.marca
  console.log("Producto: " + marca)

  let productos_filtrados = products

  if (marca) {
    productos_filtrados = productos_filtrados.filter ( 
      product => product.marca === marca) 
  }
  /* productos_filtrados = 
  marca ? productos_filtrados.filter(product => product.marca === marca) : productos_filtrados;*/

  if (marca) {
    return resp.json(
    {
      status: 200,
      mensaje: `Consulta productos`,
      ok: true,
      data: {
      products: productos_filtrados
      }
    }
  )}
  console.log(`URL: http://localhost:3000/products?marca=${marca}`)

  const min_price = req.query.min_price;
  const max_price = req.query.max_price

  console.log(min_price);
  let productos_filtrados_prices = products;  

  if (min_price) {
    productos_filtrados_prices = productos_filtrados_prices.filter(product => product.price >= min_price);
  }

  if (max_price){
    productos_filtrados_prices = max_price ? productos_filtrados_prices.filter(product => product.price < max_price) : productos_filtrados_prices
  }
console.log(productos_filtrados_prices)
/**
 * @return agregando un return antes de cada resp.json para evitar que el código continúe ejecutándose. 
 */

  if (productos_filtrados_prices.length === 0) {
    resp.json({ // Agregar return aquí
      status: 404,
      message: 'No se encontraron productos.',
      ok: false,
      data: {
        products: []
      }
    });
  }else{
    resp.json({ // También agregar return aquí
      status: 200,
      message: 'Productos encontrados',
      ok: true,
      data: {
        products: productos_filtrados_prices
      }
    })
  }
})


// import express from 'express';

// // Crear una aplicacion express
// const app = express();

// // Definir puerto
// const PUERTO = 3000;

// // Ejecutar esta acción cuando la app se esté escuchando
// app.listen(PUERTO, () => {
//   console.log(`Aplicación ejecutándose en: 
//     http://localhost:${PUERTO}/test
//     http://localhost:${PUERTO}/ping
//     http://localhost:${PUERTO}/products`);
// })

// // Definir ruta para la página principal
// app.get('/test', (req, res) => {
//   console.log('Consulta recibida: test');
//   res.send(`
//     <h1>Consulta RECIBIDA</h1>
//     <h2>Pruebas desde postman</h2>`);
// })

// app.get('/ping', (req, res) => {
//   console.log('Consulta recibida: ping');
//   res.json({
//     mensaje: 'Consulta PING',
//     ok: true,
//     status: 200,
//     data: null,
//   })
// })

// const products = [
//   { id: 1, name: 'producto 1', price: 10, marca: 'samsung' },
//   { id: 2, name: 'producto 2', price: 5, marca: 'apple' },
//   { id: 3, name: 'producto 3', price: 7, marca: 'xiaomi' },
//   { id: 4, name: 'producto 4', price: 12, marca: 'samsung' },
//   { id: 5, name: 'producto 5', price: 4, marca: 'apple' },
//   { id: 6, name: 'producto 6', price: 10, marca: 'xiaomi' },
// ]

// // Función para filtrar productos
// const filterProducts = (products, { marca, min_price, max_price }) => {
//   let filteredProducts = products

//   if (marca) {
//     filteredProducts = filteredProducts.filter(product => product.marca === marca)
//   }

//   if (min_price) {
//     filteredProducts = filteredProducts.filter(product => product.price >= min_price)
//   }

//   if (max_price) {
//     filteredProducts = filteredProducts.filter(product => product.price < max_price)
//   }

//   return filteredProducts
// };

// app.get('/products', (req, res) => {
//   const { marca, min_price, max_price } = req.query;
//   console.log(`Consulta de productos con marca: ${marca}, min_price: ${min_price}, max_price: ${max_price}`)

//   const productos_filtrados = filterProducts(products, { marca, min_price, max_price })

//   if (productos_filtrados.length === 0) {
//     return res.json({
//       status: 404,
//       message: 'No se encontraron productos.',
//       ok: false,
//       data: { products: [] },
//     })
//   }

//   return res.json({
//     status: 200,
//     message: 'Productos encontrados',
//     ok: true,
//     data: { products: productos_filtrados },
//   })
// })
