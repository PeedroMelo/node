module.exports = function(application) {

    application.get('/locais', function(req, res) {       

        var conn = application.config.conn();
        var locaisModel = application.app.models.locaisModel();

        locaisModel.getLocais(conn, function(erro, result){
            res.render("locais/locais", {locais: result});
        });
    });
};