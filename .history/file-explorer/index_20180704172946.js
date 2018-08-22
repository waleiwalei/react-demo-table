var fs = require('fs');

fs.readdir(process.cwd(), (err, files) => {
    console.log(files);
    console.log(process.cwd())
})