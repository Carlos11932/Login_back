'use strict'

const mongoose = require('mongoose')
const app = require('./app')
const config = require('./config')

mongoose.connect(config.db, (err, res) => {
  if(err) {
    return console.log(`Error: ${err}`)
  }
  console.log('Conexion establecida')

  app.listen(config.port, () => {
    console.log(`API FUNCIONANDO en ${config.port}`)
  })
})
