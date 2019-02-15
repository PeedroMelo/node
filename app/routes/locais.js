var Connection = require('../../config/conn');

module.exports = function(app) {

    var conn = Connection();

    app.get('/locais', function(req, res) {       

        var sql = 'SELECT id, nome FROM places WHERE ativo = 1'

        conn.query(sql, function(erro, result){
            res.render("locais/locais", {locais: result});
        });
    });
};