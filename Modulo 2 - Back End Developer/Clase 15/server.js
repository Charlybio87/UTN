import express from 'express'
const app = express()
const PORT = 3000

app.use(express.json())

import statusRoute from './routes/status.route.js'
import authRouter from './routes/auth.route.js'
import loginRouter from './routes/login.route.js'

app.use( '/api/status', statusRoute )
app.use( '/api/auth', authRouter )
app.use('/api/auth', loginRouter)

app.listen(PORT,() =>{
  console.log(`Server corriendo: http://localhost:${PORT}`)
})
