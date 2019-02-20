var express = require("express"); // Realiza a requisição da lib Express
var consign = require("consign"); // utiliza as rotas dinamicamente
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');

var application = express(); // Executa a função da lib Express
// Informa que agora, o engine de view é o EJS
// set() -> modifica a tabela de propriedades do express ('propriedade','modulo')
application.set("view engine", "ejs");
application.set('views', './app/views') // Novo caminho de views

// Middlewares
application.use(bodyParser.urlencoded({extended: true})); 
application.use(expressValidator())


consign()
    .include('app/routes')
    .then('config/conn.js')
    .then('app/models')
    .into(application); // Define o caminha da pasta das rotas

module.exports = application;