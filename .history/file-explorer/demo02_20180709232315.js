var fs = require('fs');

var files = fs.readdirSync(process.cwd());

files.forEach( file => {
    if(/\.css/.test(file)) {
        file.watchFile(process.cwd() + '/' + file, () => {
            console.log(file + 'changed');
        });
    }
});