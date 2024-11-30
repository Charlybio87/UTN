import express, { request } from 'express'

const app = express()

const PUERTO = 3000

app.use(express.json())


app.get('/ping', (request, response) => {
    response.json({
        status: 200,
        ok: true,
        mensaje: `Pong!`,
    })
})

const products = []

//POST 
//Uso: Se utiliza para enviar datos al servidor, generalmente para crear un nuevo recurso. Este método no es idempotente, ya que cada solicitud puede crear un nuevo recurso.
app.post('/products', (request, response) => {
  //Recibir los datos para crear el producto, los validamos y lo agregamos al array de products
    const {title, price, description} = request.body

    const errors = {
        title: null,
        price: null, 
        description: null
    }
    if(!title){
        errors.title = 'No has ingresado un titulo'
    }
    if(!price || price < 0){
        errors.price = 'El precio debe ser mayor a 0 y debe estar.'
    }
    if(!description){
        errors.description = 'No se ingreso descripcion'
    }

    let hayErrores = false
    for(let error in errors){
        if(errors[error]){// entra si uno de las tres propiedades no es null
            hayErrores = true
        }
    }
    if(hayErrores){
        response.json(
            {
                message: 'Hay errores en el producto',
                ok: false, 
                status: 400, //bad request
                errors: errors
            }
        )
    }
    else{
        products.push(
            {
                title, 
                price, 
                description, 
                id: products.length + 1, 
                active: true
            })
        response.json(
            {
                message: 'Producto creado con exito',
                ok: true,
                status: 201, //created se usa cuando un recurso fue creado en el servidor
                data: {
                    products: obtenerProductos()
                }
            }
        )
    }
})

//GET 
//Uso: Se utiliza para solicitar datos de un servidor. Es un método seguro y idempotente, lo que significa que no debería tener efectos secundarios en el servidor.
app.get('/products/:product_id', (request, response) =>{
    //request.params es un objeto con los parametros de busqueda
    //los parametros siempre vienen como string 
    const {product_id} = request.params
    console.log(product_id)    
    const product_found = obtenerProductos().find(product => product.id === Number(product_id))
    if(!product_found){
        response.json(
            {
                ok: false,
                status: 404,
                message: 'no se encontro producto',
                data: {
                    products: null
                },
                error: `producto con id ${product_id} no existe`
            }
        )
    }else{
        response.json(
            {
                ok: true,
                status: 200,
                message: 'producto obtenido',
                data: {
                    products: product_found
                }
            }
        )
    }
})

//PUT
//Uso: Se utiliza para actualizar un recurso existente en el servidor. Es idempotente, lo que significa que realizar la misma solicitud varias veces tendrá el mismo efecto que realizarla una sola vez.
app.put('/products/:product_id', (request, response) =>{
    const new_values = request.body //Valores a actualizar
    const {product_id} = request.params

    const errores = {
        price: null,
        title: null
    }

    if(!new_values.price && !isNaN(new_values.price)){
        errores.price = 'El precio debe ser un numero'
    }

    if(!new_values.title && new_values.title.length < 3){
        errores.title = 'El titulo debe tener almenos 3 caracteres'
    }

    let hayErrores = false
    for(let error in errores){
        if(errores[error]){
            hayErrores = true
        }
    }
    if(hayErrores){
        response.json(
            {
                message: 'Hay errores en el producto',
                ok: false, 
                status: 400, //bad request
                errors: errores
            }
        )
    }
    else{
        const product_found = products.find(product => product.id === Number(product_id))
        for(let prop in new_values){
            product_found[prop] = new_values[prop]
        }
        response.json(
            {
                ok: true,
                status: 200,
                message: 'producto actualizado',
                data: {
                    products: obtenerProductos()
                }
            }
        )
    }    
})

//DELETE
//Uso: Se utiliza para eliminar un recurso del servidor. También es idempotente, ya que eliminar el mismo recurso varias veces no tendrá un efecto adicional después de la primera eliminación.
app.delete('/products/:product_id', (request, response) =>{
    const {product_id} = request.params //es un objeto con los parametros de busqueda, en este caso {product_id: 'value'}
    const product_found = products.find(product => product.id === Number(product_id))
    if(!product_found){
        response.json({
            status: 404,
            ok: false, 
            message: 'No encontrado',
            data: {
                product: null
            },
            error: `Producto con id ${product_id} no existe`
        })
    }
    else{
        product_found.active = false
        response.json({
            message: 'Producto eliminado',
            ok: true,
            status: 200,
            data: obtenerProductos()
        })
    }
    
})

const obtenerProductos = () =>{
    return products.filter(products => products.active )
}

app.listen(PUERTO, () => {
    console.log(`Aplicacion ejecutandose en: 
    http://localhost:${PUERTO}/ping
    http://localhost:${PUERTO}/products
    http://localhost:${PUERTO}/message`)
})

const messages = []
app.post('/messages', (request, response) =>{
  //Recibir los datos para crear el mensaje, los validamos y lo agregamos al array de messages
    const {text, author_id = 1} = request.body

    const errors = {
        text: null,
        author_id: null
    }
    if(!text || text.length <=5){
        errors.text = 'No has ingresado texto'
    }
    if(!author_id || typeof author_id !== 'number'){
        errors.author_id = 'No has ingresado un id de autor o no es un número'
    }

    let hayErrores = false
    for(let error in errors){
        if(errors[error]){
            hayErrores = true
        }
    }
    if(hayErrores){
        response.json(
            {
                message: 'Hay errores en el producto',
                ok: false, 
                status: 400, //bad request
                errors: errors
            }
        )
    }
    else{
        messages.push({
            text,
            author_id: messages.length + 1,
            active: true
        })
        response.json(
            {
                message: 'Mensaje creado con exito',
                ok: true,
                status: 201, //created se usa cuando un recurso fue creado en el servidor
                data: {
                    message: messages
                    }
            }
        )
    }
})
app.get('/messages', (request,response) => {
    console.log(messages[0]);
    
    messages[0] ? 
    response.json(
        {
            ok: true,
            status: 200,
            message: 'Lista de mensajes',
            data: {
                messages: messages 
            }
        }
    ) :
    response.json(
        {
            ok: false, 
            status: 404,
            message: 'No hay mensajes', 
            data: {
                messages: []
            }
        }
    )
})
app.get('/messages/:author_id', (request, response) =>{
    const {author_id} = request.params
    console.log(author_id)    

    const message_found = messages.find(message => message.author_id === Number(author_id))

    if(!message_found){
        response.json(
            {
                ok: false,
                status: 404,
                message: 'no se encontro message',
                data: {
                    message: null
                },
                error: `message con id ${author_id} no existe`
            }
        )
    }else{
        response.json(
            {
                ok: true,
                status: 200,
                message: 'message obtenido',
                data: {
                    message: message_found
                }
            }
        )
    }
})
app.delete('/messages/:author_id', (request, response) => {
    const {author_id} = request.params
    
    const messageDelete = messages.find(message => message.author_id === Number(author_id))
    !messageDelete ?
    response.json(
        {
            status: 404,
            ok: false, 
            message: 'No encontrado',
            data: {
                messages: null
            },
            error: `Mensaje con id ${author_id} no existe`
        }
    ) :
    messageDelete.active = false
    response.json(
        {
            message: `Mensaje eliminado con id ${author_id}`,
            ok: true,
            status: 200,
            data: {
                messages: listaMensajesActive()
                },
            dataDelete: {
                message: messageDelete
            }
        }
    )
})
app.put('/messages/:author_id', (request, response) => {
    const {author_id} = request.params
    const newMessage = request.body

    const errores = {
        author_id: null
    }

    if(!newMessage.author_id <= 0 && isNaN(newMessage.author_id)){
        errores.author_id = 'El id del autor debe ser un número y mayor a 0'
    }
    let hayErrores = false
    for(let error in errores){
        if(errores[error]){
            hayErrores = true
        }
    }

    if(hayErrores){
        response.json(
            {
                message: 'No se han encontrado mensajes',
                ok: false, 
                status: 400, //bad request
                errors: errores
            }
        )
    }
    else{
        const messagePut = messages.find(messages => messages.author_id === Number(author_id))
        for(let prop in newMessage){
            messagePut[prop] = newMessage[prop]
        }
        response.json(
            {
                ok: true,
                status: 200,
                message: 'Mensaje actualizado',
                data: {
                    message: listaMensajesActive()
                }
            }
        )
    } 
})
const listaMensajesActive = ( ) => {
    return messages.filter( messages => messages.active )
}