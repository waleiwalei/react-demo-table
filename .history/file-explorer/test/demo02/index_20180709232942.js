//fs.readdirSync(dirName)
//fs.watchFile(fileName, funcb)
//fs.wacth  监视整个目录

var fs = require('fs');

var files = fs.readdirSync(process.cwd());

files.forEach( file => {
    if(/\.css/.test(file)) {
        fs.watchFile(process.cwd() + '/' + file, () => {
            console.log(process.cwd() + '/' + file + 'changed');
        });
    }
});