var fs = require('fs');
var rs = fs.createReadStream('Example_File/event_file.txt');
rs.on('open', function () {
  console.log('The file is open');
});