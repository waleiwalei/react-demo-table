var fs = require('fs');

console.log('');
fs.readdir(process.cwd(), (err, files) => {
    if(!files.length) {
        console.log('No file to select');
    } else {
        // console.log('select which file to read');
    }

    file = (i) => {
        var filename = files[i];
        console.log(i);
        fs.stat(process.cwd() + '/' + filename, (err, stat) => {
            if(stat.isDirectory()) {
                console.log(i + '-D-' + filename);
            } else {
                console.log(i + '-F-' + filename);
            }
        });
        i++;
        if(i == files.length) {
            process.stdout.write('Select file to read');
            process.stdin.resume();
        } else {
            file(i);
        }
    }
    file(0);
});


