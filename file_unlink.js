var fs = require('fs');

fs.unlink('Example_File/3.txt', function (err) {
  if (err) throw err;
  console.log('File deleted!');
});