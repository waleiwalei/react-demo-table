//fs.readdirSync(dirName)
//fs.watchFile(fileName, funcb)
//fs.wacth  监视整个目录

var fs = require('fs');

/**
 * type: rename[include add/delete a file on mose platform] | change
 * name: fileName
 */
// fs.watch(process.cwd(), (type, name) => {
//     console.log(`type: ${type}, name: ${name} changed`);
// })



// var files = fs.readdirSync(process.cwd());

files.forEach( file => {
    if(/\.css/.test(file)) {
        fs.watchFile(process.cwd() + '/' + file, () => {
            console.log(process.cwd() + '/' + file + 'changed');
        });
    }
});