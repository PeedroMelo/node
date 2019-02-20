function NoticiasDAO(conn) {
    this._conn = conn;
}

NoticiasDAO.prototype.getNoticias = function(callback) {
    var sql = 'SELECT * FROM noticias'
    this._conn.query(sql, callback);
};

NoticiasDAO.prototype.getNoticia = function(callback){
    var sql = 'SELECT noticia, DATE_FORMAT(criacao, "%d/%m/%Y") as criacao FROM noticias WHERE id = 1';
    this._conn.query(sql, callback);
}

NoticiasDAO.prototype.salvarNoticia = function(noticia, callback){
    var sql = 'INSERT INTO noticias SET ? ';
    this._conn.query(sql, noticia, callback);
}

module.exports = function() {    
    return NoticiasDAO;
}