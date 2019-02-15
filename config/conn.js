var mysql = require('mysql');

module.exports = function() {
    return  mysql.createConnection({
        host     : 'localizai.clzmf6xwazfa.us-west-2.rds.amazonaws.com',
        user     : 'localizai',
        password : 'localizai20181234',
        database : 'localizai',
    });
};