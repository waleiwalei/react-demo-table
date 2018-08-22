const http = require('http');

const server = http.createServer( (req, res) => {
    req.on('data', (chunk) => {
        
    })
}); 

server.listen(9999);