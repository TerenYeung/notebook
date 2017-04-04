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
	}
}