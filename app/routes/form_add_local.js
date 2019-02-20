module.exports = function(application) {
    application.get('/form_add_local', function(req, res){
        res.render("admin/form_add_local");
    });
};