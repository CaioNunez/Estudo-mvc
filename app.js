const express = require("express");
const app = express();
const port = 3000;
const produto= require("./src/routes/produtoRoute");
const home = require ("./src/routes/homeRoute")

app.set ("view engine", "ejs");
app.set ("views", __dirname + "/src/views");

app.use("/", home);
app.use("/produto", produto)

//app.listen (port, function(){ console.log (`Servidor rodando em http://localhost:${port}`)})
app.listen (port,()=>{
    console.log (`Servidor rodando em http://localhost:${port}`)
})