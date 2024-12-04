


import express, { request, response } from 'express'

const statusRoute = express.Router()

statusRoute.get('/ping',
  (request, response) => {
    response.sendStatus(200)
  }
)

export default statusRoute