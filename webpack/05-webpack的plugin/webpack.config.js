const webpack = require('webpack');
//直接引入BannerPlugin插件
//webpack.BannerPlugin
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './main.js',
	output: {
		filename: './bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.css$/,
				loaders: ['style-loader','css-loader']
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'test5',
			filename: 'index.html',
		})
	]
}