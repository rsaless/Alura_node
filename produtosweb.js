var http = require('http');
var porta = 3000;
var ip = "localhost";

http.createServer(function(req, res) {
    if (req.url == "/produtos"){
        res.end('<html><body>Listando os produtos da loja</body></html>');
    } else {
        res.end('<html><body>Home</body></html>');
    }
}).listen(porta, ip);

console.log("Server running at http://" + ip + ":" + porta + "/");