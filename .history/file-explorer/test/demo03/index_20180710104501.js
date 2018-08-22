const http = require('http');

const server = http.createServer( (req, res) => {
    let body = '';
    req.on('data', (chunk) => {
        body += chunk;
    });


    req.on('end', () => {
        try{
            res.write(JSON.parse(body));
            res.end();
        } catch {
            res.write('');
        }
    })
}); 

server.listen(9999);