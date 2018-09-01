var app = require('./config/express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.set('io',io);

http.listen(3000, function() {
    console.log("Server running at: http://localhost:3000");
});
