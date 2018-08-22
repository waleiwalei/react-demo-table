var fs = require('fs');

console.log('');
fs.readdir(process.cwd(), (err, files) => {
    if(!files.length) {
        console.log('No file to select');
    } else {
        // console.log('select which file to read');
    }

    file = (i) => {
        fs.stat(process.cwd() + '/' + files[i], (err, stat) => {
            if(stat.isDirectory()) {
                console.log('D-' + files[i-1]);
            } else {
                console.log('F-' + files[i-1]);
            }
        });

        if(i == files.length) {
            setImmediate( () => {
                process.stdout.write('Select file to read');
                process.stdin.resume();
            })
        } else {
            setImmediate( () => {
                file(++i);
            })
        }
    }
    file(0);
});


