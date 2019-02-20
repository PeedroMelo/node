module.exports = function() {

    this.getLocais = function(conn, callback) {

        var sql = 'SELECT id, nome FROM places WHERE ativo = 1'
        conn.query(sql, callback);
    };

    this.getLocal = function(conn, callback){
        var sql = 'SELECT * FROM places WHERE id = 1';
        conn.query(sql, callback);
    }
    return this;
}