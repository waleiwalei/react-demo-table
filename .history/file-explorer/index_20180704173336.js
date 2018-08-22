var fs = require('fs');

console.log('');
fs.readdir(process.cwd(), (err, files) => {
    if(!files.length) {
        console.log('No file to select');
    } else {
        console.log('select which file to read');
    }
});

file(i) {
    fs.stat(process.cwd() + '/' + file(i), (err, file) => {

    })
}

