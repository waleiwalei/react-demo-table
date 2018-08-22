const path = require('path');

module.exports = {
    entry: 'src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devServer: {
        inline: true,
        port: 3333
    }
}