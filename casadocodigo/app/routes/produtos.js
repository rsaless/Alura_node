module.exports = function(app) {

    app.get("/produtos",function(req, res) {
        var connection = app.infra.connectionFactory();
        var produtosDAO = new app.infra.ProdutosDAO(connection);

        produtosDAO.lista(function(err,results){
            if (err){console.log(err);}
            res.format({
                html: function() {
                    res.render('produtos/lista',{lista:results});
                },
                json: function () {
                    res.json(results);
                }
            });
        });

        connection.end();

    });

    app.get("/produtos/form", function (req,res) {
        res.render('produtos/form');
    });

    app.post("/produtos", function (req,res) {
        var produto = req.body;
        console.log(produto);

        var connection = app.infra.connectionFactory();
        var produtosDAO = new app.infra.ProdutosDAO(connection);
        produtosDAO.salva(produto, function (erros, resultados) {
            res.redirect('/produtos');
        })
    });

    app.get("/produtos/remove",function() {
        var connection = app.infra.connectionFactory();
        var produtosDAO = app.infra.ProdutosDAO(connection);
        var produto = produtosDAO.carrega(id, callback);
        if (produto){
            produtosDAO.remove(produto,callback);
        }
    });
};
