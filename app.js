var app = require('./config/server');

var rotaHome       = require('./app/routes/home')(app);
var rotaNoticias   = require('./app/routes/noticias')(app);
var rotaAddNoticia = require('./app/routes/form_add_noticia')(app);
var rotaLocais     = require('./app/routes/locais')(app);

// (porta, callback)
app.listen(3000, function(){
    console.log("Servidor Online (Express)");    
})
