module.exports = function(app) {
    app.get("/produtos",function(req, res) {
        var mysql = require('mysql');
        var connection = mysql.createConnection({
            host: "localhost",
            user: "root",
            password : "",
            database: "casadocodigo_nodejs",
        });

        connection.query('select * from livros', function(err,results){
            if (err){
                console.log(err);
            }
            res.render('produtos/lista',{lista:results});
        });


        connection.end();

    });
};
