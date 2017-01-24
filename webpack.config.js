const webpackMerge = require('webpack-merge');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

var webpackConfig = {
	entry: [
		'./src/assets/js/index.ts',
		'./src/assets/css/styles.less',

	],
	output: {
		publicPath: '/dist/',
		path: __dirname + '/src/dist/',
		filename: 'index.js'
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				loader: 'ts-loader?' + JSON.stringify({
					transpileOnly: true
				}),
				exclude: /node_modules/,
			},
			{
				test: /\.less$/,
				exclude: /node_modules/,
				loader: ExtractTextPlugin.extract({
					fallbackLoader: 'style-loader',
					loader: [
						{
							loader: 'css-loader',
							options: {
								importLoaders: 1,
								sourceMap: true
							}
						},
						{
							loader: 'less-loader',
							options: {
								sourceMap: true
							}
						}
					]
				})
			},
			{
				test: /\.svg$/,
				loader: 'svg-sprite-loader?' + JSON.stringify({
					name: '[name]',
					prefixize: true
				})
			}
		]
	},
	plugins: [
		new ExtractTextPlugin('styles.css')
	],
	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.less', '.svg']
	}
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


