
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const controller = require('./ComidasController')


// import express from 'express'


const servidor = express()
servidor.use(cors())

servidor.get("/comidas", (request, response) => {
  // response.header('Access-Control-Allow-Origin','*')
  response.send(controller.getAll())

})

servidor.post('/comidas', bodyParser.json(), (request,
  response) => {
  controller.add(request.body)
  response.send(201)

})

servidor.delete('/comidas/:id', (request,response)=>{
  controller.remove(request.params.id)
  response.sendStatus(204)
})


servidor.listen(3000)
console.log("servidor wonderful rodando na porta 3000") 