module.exports = {
	entry: './main',
	output: {
		filename: './bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.(png|jpg)$/,
				loader: 'url-loader?limit=8000'
			}
		]
	}
}