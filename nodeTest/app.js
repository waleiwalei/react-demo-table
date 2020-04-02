var express = require('express');
var app = express();
var routes = require('./routes');

// app.use((req, res, next) => {
//     console.log(req.query);
//     // res.end();
//     next();
// });

// app.get('/', (req, res) => {
//     console.log('test homePage');
//     res.send('homePage');
// });

app.use('/', routes);

app.all('*', (req, res) => {
    res.sendStatus(403);
});

app.listen(8099, () => {
    console.log('listening...');
});