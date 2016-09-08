module.exports = {
	entry: './app/components/MainBox.js',
	output: {
		filename: './public/bundle.js'
	},
	module: {
		loaders:[
			{
				test: /\.js$/,
				exclude: /node_module/,
				loader: 'babel-loader',
				query:{
					presets:['es2015', 'react']
				}
			}
		]
	}
}
