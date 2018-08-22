const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');

module.exports = {

	//入口
	entry: {
        app: [
            'react-hot-loader/patch',
            path.join(__dirname, 'src/index.js')
        ],
        vendor: ['react', 'react-router-dom', 'redux', 'react-dom', 'react-redux']
    },

	output: {
		path: path.join(__dirname, './dist/js'),
		//在router.js中的name=home配置的name
        filename: '[name].[hash].js',
        chunkFilename: '[name].[chunkhash].js'
	},

	//将hash生成的对应js文件加载到这个html中，避免因为hash值得不同手动修改
	plugins: [new HtmlWebpackPlugin({
		//入口html文件名
        filename: 'index.html',
        //入口html文件模板
        template: path.join(__dirname, 'src/index.html')
    })/*,
    new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor'
        })*/],

	devServer: {
		/*注意的一点就是在webpack.config.js文件里面，
		如果配置了output的publicPath这个字段的值的话，
		在index.html文件里面也应该做出调整。因为webpack-dev-server
		伺服的文件是相对publicPath这个路径的*/
		//host: '0.0.0.0',          //指定host（--host）
		// hot: '',                 //启用webpack模块热替换
		port: '8099',                //指定要监听的端口
		// proxy: '',               //启用代理
		//progress: '',             //cli参数，将编译进度输出到控制台
		historyApiFallback: false,  //当路径找不到时默认打开index.html
		contentBase: './dist',
		inline: true

	},

	//方便排查错误信息
	devtool: 'inline-source-map',

	resolve: {
		alias: {
			pages: path.join(__dirname, 'src/pages'),
			router: path.join(__dirname, 'src/router'),
			actions: path.join(__dirname, 'src/redux/actions'),
            reducers: path.join(__dirname, 'src/redux/reducers')
		}
	},

	/*src文件夹下面的以.js结尾的文件，要使用babel解析*/
	/*cacheDirectory是用来缓存编译结果，下次编译加速*/
	module: {
		/*loaders: [{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: 'babel-loader'
		}]*/
		/*rules: [
			{ test: /\.js/, use: 'babel-loader' }
		]*/
		rules: [{
			test: /\.js$/,
			use: 'babel-loader',
			include: path.join(__dirname, 'src')
		},
		{
		    test: /\.(png|jpg|gif)$/,
		    use: [{
		        loader: 'url-loader',
		        // 小于8k的图片直接转换为base64编码（DataURL），插入html中，减少请求
		        //等价写法：use: 'url-loader?limit=xxxx 
		        //file-loader的作用是将文件复制到其他目录
		        options: {
		            limit: 8192
		        }
		    }]
		},
		//css-loader: 加载.css文件
		//style-loader:使用<style>将css-loader内部样式注入到我们的HTML页面
		{
		   test: /\.css$/,
		   use: ['style-loader', 'css-loader']
		}]
	}
}