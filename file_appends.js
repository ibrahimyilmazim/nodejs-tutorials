var fs = require('fs');

fs.appendFile('Example_File/my_new_file.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});