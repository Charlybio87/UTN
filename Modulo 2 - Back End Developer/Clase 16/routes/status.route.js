

//la configuracion del enrutador de status

import express from 'express'
import jwt from 'jsonwebtoken'
import ENVIROMENT from '../config/enviroment.js'


const statusRoute = express.Router()


statusRoute.get('/ping', (request, response)=>{
    response.sendStatus(200)
})

const middlewareDePrueba = (req,res,next) =>{
    const numero_randon = Math.random()
    console.log('numero random:', numero_randon);
    
    if(numero_randon > 0.5){
        req.headers.suerte = 'El usuario tiene suerte'
        next()
        }else{
        res.sendStatus(500)
        }
}


statusRoute.get('/protected/ping',middlewareDePrueba ,( request, response) =>{
    try {
        console.log(request.headers.suerte);
        
        const access_token = request.headers.authorization.split(' ')[1]
        
        const user_info = jwt.verify(access_token, ENVIROMENT.SECRET_KEY_JWT)
        console.log(user_info);
        
        response.sendStatus(200)

    } catch (error) {
        console.error(error)
        response.json({
            ok:false,
            status: 401,
            message: 'Unauthorized'
        })
    }
})



statusRoute.get('/datos-bancarios',(request,response)=>{
    try {
        
    } catch (error) {
        console.error(error)
    }
}) 
export default statusRoute
