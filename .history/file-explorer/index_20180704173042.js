var fs = require('fs');

console.log('');
fs.readdir(process.cwd(), (err, files) => {
    console.log(files);
});
console.log('');
