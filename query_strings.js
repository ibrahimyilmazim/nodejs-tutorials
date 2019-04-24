var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});
  var q = url.parse(req.url, true).query;
  var txt = q.name + "&" + q.surname;
  res.end(txt);
}).listen(8080);