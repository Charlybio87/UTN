import express from 'express'
import filesystem from 'fs'

const loginRouter = express.Router()

loginRouter.post('/login', async (request, response) => {
    try {
        const { email, password } = request.body // extraigo propiedades

        const listaUsers = await filesystem.promises.readFile('./data/users.json', { encoding: 'utf-8' }) // leer el archivo como texto

        console.log(listaUsers)

        const data = JSON.parse(listaUsers) // parseo el texto a un objeto JSON

        const users = data.users // Accede al arreglo de usuarios
        const user = users.find(user => user.email === email) // Busca el usuario por email
        console.log(user)
        // console.log(user.email)
        // console.log(user.password)

        // Verifica si el usuario existe
        if (!user) {
            return response.json({ 
                ok: false,
                status: 401,
                error: 'El usuario no existe'
            })
        }

        // Verifica si la contraseña es correcta
        if (user.password === password) {
            return response.json({ 
                ok: true,
                status: 200,    
                message: 'Login in',
                data: {
                    user_info: {
                        id: user.id,
                        name: user.name,
                        email: user.email
                    }
                }
            }) // Respuesta de éxito
        } else {
            return response.status(401).json({ 
                ok: false,
                status: 401,
                error: 'Password incorrecto'
            })
        }

    } catch (error) {
        console.error(error) // Imprimir el error en la consola
        response.json({
            ok: false,
            status: 500,
            message: 'Internal server error',
        })
    }
})

export default loginRouter