module.exports.noticias = function(application, req, res) {
    var conn = application.config.conn();
    var noticiasModel = new application.app.models.NoticiasDAO(conn);

    noticiasModel.getNoticias(function(erro, result){
        res.render("noticias/noticias", {noticias: result});
    });
}

module.exports.noticia = function(application, req, res) {
    var conn = application.config.conn();
    var noticiasModel = new application.app.models.NoticiasDAO(conn);

    var id = req.query;

    noticiasModel.getNoticia(id, function(erro, result){
        res.render("noticias/noticia", {noticia: result});
    });
}