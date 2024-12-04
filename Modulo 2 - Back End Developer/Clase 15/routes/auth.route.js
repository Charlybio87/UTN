import express, { response } from 'express'
import filesystem from 'fs'

const authRouter = express.Router()

authRouter.post('/register', async (request, response) => {
    try {
        const { name, email, password } = request.body

        //validamos estos datos         
        if(!name || name.length < 3){
            return response.json({ 
                status: 400,
                message: 'El nombre debe tener al menos 3 caracteres.'
            })
        }
        
        /*validacion de email PENDIENTE */
        if(!email || !(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email))) {
            return response.json({
                status: 400,
                message: 'El email no es válido'
            })
        }

        if (!password || password.length < 6) { 
            return response.json({ 
                status: 400,
                message: 'La contraseña debe tener al menos 6 caracteres.' 
            })
        }

        const users_info = JSON.parse(await filesystem.promises.readFile(
            './data/users.json',
            { encoding: 'utf-8' }
        ))

        //Validar que el usuario con ese email sea nuevo
        const users = users_info.users
        
        const user = users.find(user => user.email === email)
        if (user) {
            return response.json({ 
                status: 400,
                message: 'El usuario ya existe' 
            })
        }

        users_info.id_counter = users_info.id_counter + 1
        const new_user = {
            name,
            email,
            password,
            id: users_info.id_counter
        }
        users_info.users.push(new_user)
        await filesystem.promises.writeFile('./data/users.json', JSON.stringify(users_info))
        response.json({
            ok: true,
            status: 201,
            message: 'Registro de usuario ha sido exitoso',
            data: {
                name: new_user.name,
                email: new_user.email,
                id: new_user.id
            }
        })
    }
    catch(error){
        console.error(error)
        return response.json({
            ok: false,
            status: 500,
            message: 'Internal Server error'
        })
    }
})

export default authRouter