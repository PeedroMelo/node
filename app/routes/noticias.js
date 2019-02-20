module.exports = function(application) {

    application.get('/noticias', function(req, res) {       

        var conn = application.config.conn();
        var noticiasModel = new application.app.models.NoticiasDAO(conn);

        noticiasModel.getNoticias(function(erro, result){
            res.render("noticias/noticias", {noticias: result});
        });
    });
};