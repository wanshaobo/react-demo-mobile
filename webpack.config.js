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
		new HtmlWebpackPlugin({
			template: 'index.html'
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
	devServer: {
		contentBase: './dist',//指定服务开启的位置，在dist文件夹中
		// host: 'localhost',//127.0.0.1
		// host: '10.3.80.181',//127.0.0.1
		// port: 8080,
		historyApiFallback: true,
		// hot: true,
		inline: true,
		progress:true,
		compress: false
	}

};

//webpack -p // webpack --optimize-minimize --define process.env.NODE_ENV="production"
