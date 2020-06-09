import express from 'express'

const routes = express.Router()

routes.get('/users', (request, response) => {
  response.json({ menssage: 'Hello world' })
})

export default routes