var app = require('./config/server');

// (porta, callback)
app.listen(3000, function(){
    console.log("Servidor Online (Express)");    
})
