module.exports = function(application) {

    application.get('/noticia', function(req, res) {       

        var conn = application.config.conn();
        var noticiasModel = new application.app.models.NoticiasDAO(conn);

        noticiasModel.getNoticia(function(erro, result){
            res.render("noticias/noticia", {noticia: result});
        });
    });
};