var fs = require('fs');
var http = require('http');

http.createServer(function (req, res) {
    var filePath = req.url == '/bundle.js' ? './dist/build.js' : './dist/index.html';

    fs.readFile(filePath, 'utf-8', function (error, data) {
        res.writeHead(200, {'Content-Type' : 'text/html'});
        res.write(data);
        res.end();
    });
}).listen(3000, '127.0.0.1');
