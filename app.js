const express = require('express')
const app = express()
const port = 3001
const home = require('./src/routes/homeRoute')
const produto = require('./src/routes/produtoRoute')

app.set('view engine','ejs')
app.set('views',__dirname + '/src/views')

app.use('/', home)
app.use('/produto',produto)

app.listen(port,()=>{console.log('servidor rodando na porta '+ port)})

// app.listen (port,()=>{console.log (`Servidor rodando em http://localhost:${port}`)})