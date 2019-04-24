var url = require('url');
var adr = 'http://localhost:8080/ibr.html?name=İbrahim&surname=Yılmaz';
var q = url.parse(adr, true);

console.log(q.host); //returns 'localhost:8080'
console.log(q.pathname); //returns '/ibr.htm'
console.log(q.search); //returns '?name=İbrahim&surname=Yılmaz'

var qdata = q.query; //returns an object: { name: 2017, surname: 'february' }
console.log(qdata.name); //returns 'İbrahim'