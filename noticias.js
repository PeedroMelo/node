// require: instala as libs e pastas necessárias. neste caso, lib http
var http = require('http');

// cria um servidor, passando requisição e reposta
var server = http.createServer( function(req, res) {
    res.end('<html><body>Portal de notícias</body></html>');
});

// define qual portal o servidor irá escutar
server.listen(3000);