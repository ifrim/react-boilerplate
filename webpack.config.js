let path = require('path');
let webpack = require('webpack');

module.exports = {
	mode: 'development',
	entry: {
		'app': [
			'webpack-hot-middleware/client?path=/__webpack_hmr',
			'./src/fe/index.js'
		]
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'src/fe/'),
		publicPath: 'http://localhost:3000/'
	},
	devtool: 'inline-source-map',
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: [
					'babel-loader',
				]
			},
			{
				test: /\.less$/,
				loader: [
					'style-loader',
					'css-loader',
					'less-loader',
				]
			}
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	]
};