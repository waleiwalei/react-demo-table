const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: './app.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: "http://localhost:3000/dist/"
    },
    devServer: {
        port: 3000,
        compress: true,  // 对请求资源启用gzip压缩
        // historyApiFallback: true,   // 404时返回index.html
        publicPath: '/dist'
    },
    mode: 'development',
    // webpack3.0.0之前是包含该插件0.4.6版本的，别名webpack.optimize.UglifyJsPlugin
    // plugins: [
    //     new webpack.optimize.UglifyJsPlugin(),
    //     new HtmlWebpackPlugin({template: './src/index.html'})
    //   ]
    plugins: [
        // new UglifyJsPlugin(),
        // new webpack.optimize.ModuleConcatenationPlugin()
    ],
    // 按照教程是：
    // module: {
    //     loaders: [
    //         {
    //             test: /\.css$/,
    //             loader: 'style-loader!css-loader'
    //         }
    //     ]
    // }
    // 看了官网改成这样，也不对
    // module: {
    //     rules: [
    //         { test: /\.css$/, use: 'style-loader!css-loader' }
    //     ]
    // }
    // 最后直接百度loader改成这样
    module: {
        rules: [
            { test: /\.css$/, use: ['style-loader', 'css-loader'] }
        ]
    },
    //$结尾表示精准匹配
    resolve: {
        alias: {
            'modules$': path.resolve(__dirname, 'module.js')
        }
    }
    // 此选项决定是否生成及如何生成source-map
    // devtool: 'source-map'
}