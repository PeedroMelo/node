var mysql = require('mysql');

var conn = function() {    
    return  mysql.createConnection({
        host     : 'localizai.clzmf6xwazfa.us-west-2.rds.amazonaws.com',
        user     : 'localizai',
        password : 'localizai20181234',
        database : 'localizai',
    });
}

module.exports = function() {    
   return conn;
};