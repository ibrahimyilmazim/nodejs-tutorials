var fs = require('fs');

fs.rename('Example_File/2.txt', 'Example_File/2_new.txt', function (err) {
  if (err) throw err;
  console.log('File Renamed!');
});