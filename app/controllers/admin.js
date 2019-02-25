module.exports.add_noticia = function(application, req, res) {
    res.render("admin/form_add_noticia", {validacao: {}, noticia: {}});
}

module.exports.salvar_noticia = function(application, req, res) {
    var noticia = req.body;

    req.assert('titulo','Título é obrigatório').notEmpty();
    req.assert('resumo','Resumo é obrigatório').notEmpty();
    req.assert('resumo','Deve conter entre 10 e 100 caracteres').len(10, 100);
    req.assert('autor','Autor é obrigatório').notEmpty();
    req.assert('data_noticia','Data é obrigatória').notEmpty();
    req.assert('noticia','Notícia é obrigatória').notEmpty();

    var errors = req.validationErrors();

    if (errors) {            
        res.render('admin/form_add_noticia', {validacao: errors, noticia: noticia});
        return;
    }

    var conn = application.config.conn();
    var noticiasModel = new application.app.models.NoticiasDAO(conn);

    noticiasModel.salvarNoticia(noticia, function(erro, result){
        res.redirect('/noticias');
    });
}