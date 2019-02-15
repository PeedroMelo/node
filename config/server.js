var express = require("express"); // Realiza a requisição da lib Express
var app     = express(); // Executa a função da lib Express

// Informa que agora, o engine de view é o EJS
// set() -> modifica a tabela de propriedades do express ('propriedade','modulo')
app.set("view engine", "ejs");
app.set('views', './app/views') // Novo caminho de views



module.exports = app;