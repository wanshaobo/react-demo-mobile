var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: "development",//production
	entry: {
		build:'./src/index.js', // 将 第三方依赖 单独打包
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
		new HtmlWebpackPlugin({//自动生成html文件 这个插件的作用，不启动服务查看静态项目
			title:'wanshaobo',
			filename:'static.html',
			chunks:['build']
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
	resolve:{
		extensions: [".js",".css",".jsx",".json"],//自动解析确定的扩展，引入文件时不需要带后缀名
	}
};

//webpack -p // webpack --optimize-minimize --define process.env.NODE_ENV="production"
