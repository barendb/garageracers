const webpackMerge = require('webpack-merge');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

var webpackConfig = {
	entry: './src/assets/js/index.ts',
	output: {
		path: path.resolve(__dirname, 'src/dist'),
		filename: 'index.js'
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				loader: 'ts-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.less$/,
				use: [
					'style-loader',
					{ loader: 'css-loader', options: { importLoaders: 1 } },
					{ loader: 'less-loader', options: { strictMath: true, noIeCompat: true } }
				]
			}
		]
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js', '.less']
	},
	plugins: [
		// extract CSS into separate file
		new ExtractTextPlugin('styles.css')
	]
};

// Our Webpack Defaults
var defaultConfig = {
	devtool: 'source-map',
	devServer: {
		contentBase: './src',
		compress: true,
		port: 9000
	}
};


module.exports = webpackMerge(defaultConfig, webpackConfig);


