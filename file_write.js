var fs = require('fs');

fs.writeFile('Example_File/3.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});