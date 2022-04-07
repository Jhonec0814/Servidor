const express = require('express')
const app = express()
require('dotenv').config()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.post('/', function (req, res) {
    res.send('Hola mi nombre es frailejon ernesto perez, te vengo a saludar, no me conoces pero yo a ti si si yo soy tu amigo, tu amigo frailejon ernesto perez')
  })

app.listen(process.env.PORT,function(){
    console.log("Servidor encendido mor")
})