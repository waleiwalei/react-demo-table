var fs = require('fs');

console.log('');
fs.readdir(process.cwd(), (err, files) => {
    if(!files.length) {
        console.log('No file to select');
    } else {
        // console.log('select which file to read');
    }

    file = (i) => {
        if(i == files.length) {
            console.log('Select file to read');
            process.stdin.resume();
        } else {
            file(++i);
        }

        fs.stat(process.cwd() + '/' + files[i], (err, stat) => {
            console.log(i);
            if(stat.isDirectory()) {
                console.log('D-' + files[i-1]);
            } else {
                console.log('F-' + files[i-1]);
            }
        });
    }
    file(0);
});


