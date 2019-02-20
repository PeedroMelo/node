module.exports = function(application) {

    application.get('/local', function(req, res) {       

        var conn = application.config.conn();
        var locaisModel = application.app.models.locaisModel;

        locaisModel.getLocal(conn, function(erro, result){
            res.render("locais/local", {local: result});
        });
    });
};