module.exports = function () {
    return function (connection) {
        this.lista = function (callback) {
            connection.query('select * from livros', callback);
        };
        return this;
    }
};

/*
    this.remove = function () {
        connection.query('select * from livros', callback);
    }

 */