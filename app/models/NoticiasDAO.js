function NoticiasDAO(conn) {
    this._conn = conn;
}

NoticiasDAO.prototype.getNoticias = function(callback) {
    var sql = 'SELECT id, titulo, resumo, noticia, autor, DATE_FORMAT(data_noticia, "%d/%m/%Y") data_noticia FROM noticias ORDER BY data_noticia DESC'
    this._conn.query(sql, callback);
};

NoticiasDAO.prototype.getNoticia = function(id, callback){
    var sql = 'SELECT id, titulo, autor, resumo, DATE_FORMAT(data_noticia, "%d/%m/%Y") data_noticia FROM noticias WHERE id = ' + id.id;
    this._conn.query(sql, callback);
}

NoticiasDAO.prototype.salvarNoticia = function(noticia, callback){
    var sql = 'INSERT INTO noticias SET ? ';
    this._conn.query(sql, noticia, callback);
}

NoticiasDAO.prototype.getTop5 = function(callback){
    var sql = "SELECT id, autor, titulo, resumo, DATE_FORMAT(data_noticia, '%d/%m/%Y') as data_noticia FROM noticias ORDER BY data_noticia DESC LIMIT 5";
    this._conn.query(sql, callback);
}

module.exports = function() {    
    return NoticiasDAO;
}