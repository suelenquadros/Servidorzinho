
const express = require('express')
const cors = require('cors')
const controller = require('./ComidasController')


// import express from 'express'






const servidor = express()
servidor.use(cors())

servidor.get("/comidas", (request,response)=> {
  // response.header('Access-Control-Allow-Origin','*')
  response.send(controller.getAll())

})



servidor.listen(3000)
console.log("servidor wonderful rodando na porta 3000") 