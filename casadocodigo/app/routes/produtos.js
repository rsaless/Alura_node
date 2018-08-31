module.exports = function(app) {

    var listaProdutos = function(req, res) {
        var connection = app.infra.connectionFactory();
        var produtosDAO = new app.infra.ProdutosDAO(connection);

        produtosDAO.lista(function(err, results) {
            res.format({
                html: function() {
                    res.render('produtos/lista', {lista:results});
                },
                json: function() {
                    res.json(results);
                }
            });
        });

        connection.end();
    }

    app.get('/produtos', listaProdutos);

    app.get('/produtos/json', function(req, res) {
        var connection = app.infra.connectionFactory();
        var produtosDAO = new app.infra.ProdutosDAO(connection);

        produtosDAO.lista(function(err, results) {
            res.json(results);
        });

        connection.end();
    });

    app.get('/produtos/form', function(req, res) {
        res.render('produtos/form', {errosValidacao:{}, produto:{}});
    });

    app.post('/produtos', function(req, res) {
        var produto = req.body;

        req.assert('titulo', 'Titulo é obrigatório').notEmpty();
        req.assert('preco', 'Formato inválido').isFloat();

        var errors = req.validationErrors();

        if(errors){
            res.status(400);
            res.format({
                html: function(){
                    res.render("produtos/form",{validationErrors:errors,produto:produto});
                },
                json: function(){
                    res.send(errors);
                }
            });
            return;
        }

        var connection = app.infra.connectionFactory();
        var produtosDAO = new app.infra.ProdutosDAO(connection);

        produtosDAO.salva(produto, function(err, results) {
            res.redirect('/produtos');
        });

        connection.end();
    });
}
