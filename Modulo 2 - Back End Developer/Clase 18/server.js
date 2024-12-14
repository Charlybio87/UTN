import express, { request, response } from 'express'

const app = express()
const PORT = 3000


app.use(express.static('./public'))

// app.use(express.json())
app.use(express.urlencoded({extended:true}))
//permite recibir datos al backend


app.post('/test', (request,response)=>{
  console.log(request.body)
  response.sendStatus(200)
  
})

import handlebars from 'express-handlebars'

//config MOTOR de PLANTILLA
app.engine('handlebars', handlebars.engine() )
app.set('view engine','handlebars')
app.set('views','./views')

const workspaces = [
  {
    id:1,
    name:'Workspaces 1',
  },
  {
    id:2,
    name:'Workspaces 2',
  },
  {
    id:3,
    name:'Workspaces 3',
  }
]

app.get('/',(request,response)=>{
  response.render('home',{
    layout:'main',
    data:{ 
      title: 'Bienvenido usuario!',
      html: '<b>Prueba de html<b>',
      workspaces
    }
  })// (nombre de la vista|objeto de configuracion)
})

const productos = [
  {
      id: 1,
      nombre: 'Tv samsung',
      precio: 100,
      descripcion: 'La mejor tv',
      stock: 5,
      is_sale: false,
      offer: 0
  },
  {
      id: 2,
      nombre: 'Tv LG',
      precio: 150,
      descripcion: 'La mejor tv',
      stock: 10,
      is_sale: false,
      offer: 10
  },
  {
      id: 3,
      nombre: 'Tv Noblex',
      precio: 200,
      descripcion: 'La mejor tv',
      stock: 54,
      is_sale: false,
      offer: 0
  }
]

app.get('/products',(request,response)=>{
  response.render('products',{
    layout:'main',
    data:{ 
      title: 'Lista de productos',
      productos
    }
  })// (nombre de la vista|objeto de configuracion)
})

app.get('/products/new',(request,response)=>{
  response.render('products-form'),{
    layout:'main',
  }
})

app.post('/products/new',(request,response)=>{
  try {
    console.log(request.body)
    const {products_nombre, products_descripcion, products_precio, products_stock, products_is_sale, products_offer} = request.body
  
    const errors_state = {
      products_nombre: false,
      products_descripcion: false,
      products_precio: false,
      products_stock: false,
      products_is_sale: false,
      products_offer: false
    }
  
    //Validacion de los campos
  
    if(products_nombre.length < 3){
      errors_state.products_nombre = 'El productos debe tener mas de 3 caracteres'
    }else if(products_nombre.length > 20){
      errors_state.products_nombre = 'El productos debe tener menos de 20 caracteres'
    }else if(productos.find(products => products.nombre == products_nombre)){
      errors_state.products_nombre = 'El producto ya existe'
    }
    if (products_descripcion.length < 20) {
      errors_state.products_descripcion = 'La descripcion debe tener mas de 20 caracteres'
    } else if(products_descripcion < 200) {
      errors_state.products_descripcion = 'La descripcion debe tener menos de 200 caracteres'
    }
    if (products_precio <= 0 || products_precio === '') {
      errors_state.products_precio = 'El precio debe ser mayor a 0 y no puede estar vacío';
    }
    if (products_stock <= 0 || products_precio === '') {
      errors_state.products_stock = 'No se a ingresado un stock'
    }
    if (products_is_sale === '') {
      errors_state.products_is_sale = 'No se establecio si hay oferta'
    }
    if (!products_offer) {
      errors_state.products_offer = 'No se a ingresado un valor para la oferta'
    }
  
    let hay_errores = false
  
    for(let field in errors_state){
      if(errors_state[field]){
        hay_errores = true
      }
    }
    if(hay_errores){
      return response.render('products-form', {
        layout: 'main',
        data: {
          errors:errors_state
        }
      })
    }
  
    const new_product = {
      id: productos.length + 1,
      nombre: products_nombre,
      descripcion: products_descripcion,
      precio: products_precio,
      stock: products_stock,
      is_sale: products_is_sale,
      offer: products_offer
    }
    productos.push(new_product)
  
    response.redirect('/products/')
  
    // if(!products_nombre || productos.find(products=>products_nombre == products)){
    //   return response.render('products-form', {
    //     layout: 'main',
    //     data: {
    //       errors:errors_state
    //     }
    //   })
    // }
    response.render('products-form'),{
      layout:'main',
    }
    
  } catch (error) {
    console.error(error)
    return response.status(500).send('Error al crear producto')
  }
})

app.get('/products/:id',(request,response)=>{
  const {id} = request.params
  const products_found = productos.find(products=>products.id == id)
  response.render('products_items',{
    layout:'main',
    data: {
      products_info: products_found
    }
  })
})

/*Hacer una vista para mostrar distintos productos en 

/products

El titulo de la pagina debe decir 'Lista de productos' y abajo enlistar los productos en <div></div> para mostrar la informacion de cada producto

*/



app.listen(PORT, () => {
  console.log(`Aplicacion ejecutandose en http://localhost:${PORT}`)
})