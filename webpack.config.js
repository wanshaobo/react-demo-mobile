var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: "development",//production
	entry: {
		index:'./src/index.js', // 将 第三方依赖 单独打包
		// vendor:['react']
	},
	output: {
		// sourceMapFilename: '[file].map',
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js',
		chunkFilename: '[name].bundle.js',
		libraryTarget: "umd"
	},
	// devtool: "source-map",
	plugins: [
		// new UglifyJsPlugin()//不能和webpack -p同时使用
        //注意：先打包npm run build 再启动服务npm start，才能看到dist文件夹
		new HtmlWebpackPlugin({//这个插件的作用，不启动服务查看静态项目
			title:'wanshaobo',
			template: 'index.html',//源文件 按照当前目录下./index.html这个文件生成
			minify:{
				removeAttributeQuotes:true,//去除引号
				removeComments:true,//去除注释
				removeEmptyAttributes:true,//去除空属性
				collapseWhitespace:true//去除空格
			}
		})
	],
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env']
					}
				}
			},
			{
				test: /\.css$/,
				// use: ['style-loader', 'css-loader']
				// use: ['style-loader', 'postcss-loader']
				use: [
					{
						loader: 'style-loader',
					},
					{
						loader: 'css-loader',
						options: {
							importLoaders: 1,
						}
					},
					{
						loader: 'postcss-loader'
					}
				]
			},
			{
				test: /\.scss$/,
				use: [
					// true ? 'style-loader' : MiniCssExtractPlugin.loader,
					{ loader: "style-loader" },
					{
						loader: "css-loader",
						options: {
							modules: true,
							localIdentName: "[name]-[local]-[hash:base64:5]",
						}
					},
					{ loader: 'postcss-loader' },
					{ loader: "sass-loader" }
				]
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: 'file-loader',
				exclude: [/\.(js|jsx|mjs)$/, /\.html$/, /\.json$/, /\.scss$/, /\.css$/]
			},
			{
				test: /\.(woff|svg|eot|woff2|tff)$/,
				use: 'url-loader',
				exclude: /node_modules/
			}
		]
	},
	/*
	 当资源发生改变，以下三种方式都会生成新的bundle，但是又有区别：
	 $ webpack-dev-server 不会刷新浏览器
	 $ webpack-dev-server --inline 刷新浏览器
	 $ webpack-dev-server --hot 重新加载改变的部分，不会刷新页面
	 $ webpack-dev-server  --inline --hot 重新加载改变的部分，HRM失败则刷新页面
	 模块热替换(Hot Module Replacement 或 HMR)是 webpack 提供的最有用的功能之一。在前端代码变动的时候无需整个刷新页面，只把变化的部分替换掉。
	*/
	devServer: {//生成在内存中的
		contentBase: './dist',//服务开启的根目录 指定服务开启的位置，在dist文件夹中//注意：先打包npm run build 再启动服务npm start，才能看到dist文件夹
		// host: 'localhost',//127.0.0.1
		// host: '10.3.80.181',//127.0.0.1
		//port: 8080,
		historyApiFallback: true,
		hot: true,//启动热加载 HMR 不适用于生产环境，这意味着它应当只在开发环境使用。
		inline: true,//true 自动刷新浏览器
		progress:true,
		compress: false,
		open: true,//the dev server will open the browser
	},
	resolve:{
		extensions: [".js",".css",".jsx",".json"],//自动解析确定的扩展，引入文件时不需要带后缀名
	}
};

//webpack -p // webpack --optimize-minimize --define process.env.NODE_ENV="production"
