import express from 'express'

const app = express()

app.use(express.json())

app.get('/users', (request, response) => {
  response.json({menssage: 'Hello world'})
})

app.listen(3333)