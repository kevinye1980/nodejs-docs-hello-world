var http = require('http');

var server = http.createServer(function(request, response) {

    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("NodeJS Hello World from 1st commit to Jenkins + Docker!");

});

var port = process.env.PORT || 1447;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
