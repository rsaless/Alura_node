module.exports = function(app) {

    app.get('/produtos', function(req, res, next){
        var connection = app.infra.connectionFactory();
        var produtosDAO = new app.infra.ProdutosDAO(connection);
        produtosDAO.lista(function(erros, resultados){
            if(erros){
                return next(erros);
            }
            res.format({
                html: function(){
                    res.render('produtos/lista', {lista:resultados});
                },
                json: function(){
                    res.json(resultados);
                }
            });
        });
        connection.end();
    });

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
                    res.render("produtos/form",{errosValidacao:errors,produto:produto});
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
