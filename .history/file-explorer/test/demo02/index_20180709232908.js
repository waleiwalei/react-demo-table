//fs.readdirSync(dirName)
//fs.watchFile(fileName, funcb)

var fs = require('fs');

var files = fs.readdirSync(process.cwd());

files.forEach( file => {
    if(/\.css/.test(file)) {
        fs.watchFile(process.cwd() + '/' + file, () => {
            console.log(process.cwd() + '/' + file + 'changed');
        });
    }
});