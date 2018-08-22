const http = require('http');

const server = http.createServer( (req, res) => {
    let body = '';
    req.on('data', (chunk) => {
        body += chunk;
    });


    req.on('end', () => {
        try{
            
        } catch {

        }
    })
}); 

server.listen(9999);