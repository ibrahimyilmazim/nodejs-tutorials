var http = require('http');
// Call Module
var dt = require('./Modules/module.datetime');

http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});
	// Add ModulDateTime Content
	res.write("Now currently date&time : " + dt.myDateTime() + "<br>");
});

