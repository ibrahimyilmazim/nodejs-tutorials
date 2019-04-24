var http = require('http');

http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});
	// Say Hello For First Demo
	res.end('Hello, This is my first node.js example' + "<br>");
}).listen(8080);