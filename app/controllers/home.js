module.exports.index = function(application, req, res) {
    var conn = application.config.conn();
    var noticiasModel = new application.app.models.NoticiasDAO(conn);

    noticiasModel.getTop5(function(erro, result){
        res.render("home/index", {noticias: result}); 
    });
}