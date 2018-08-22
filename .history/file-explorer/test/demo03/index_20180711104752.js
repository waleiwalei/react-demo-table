// const http = require('http');

// const server = http.createServer( (req, res) => {
//     let body = '';

//     // req.setEncoding('utf-8');
//     req.on('data', (chunk) => {
//         body += chunk;
//     });


//     req.on('end', () => {
//         try{
//             res.write(JSON.parse(body));
//             res.end();
//         } catch (err){
//             res.statusCode = 400;
//             return res.end(`error: ${err.message}`);
//         }
//     })
// }); 

// server.listen(9999);
