var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var htmlWebpackTemplate = require('html-webpack-template');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	context: path.join(__dirname),
	entry: ['babel-polyfill', 'src/frontend/main.js'],
	output: {
		path: path.join(__dirname, 'build/frontend'),
		filename: '[name].bundle.js',
		publicPath: '/build/',
	},

	module: {
		loaders: [
			{
        test: /\.js?$/,
        exclude: /node_modules/,
        loaders: ['ng-annotate', 'babel-loader']
      },
			{
				test: /\.css$/,
				loader: ExtractTextPlugin.extract('style', 'css'),
			},
			{
				test: /\.scss$/,
				loader: ExtractTextPlugin.extract('style', 'css', 'sass'),
			},
			{
				test: /\.(png|jpg|svg)$/,
				loader: 'file',
			},
			{
				test: /\.(ttf|eot|svg|woff|woff2)$/,
				loader: 'file',
			},
			{
 		    test: /\.html$/,
 		    loader: 'html'
      }
		],
	},

	postcss: function() {
		return [autoprefixer];
	},

	plugins: [
		new webpack.ProvidePlugin({
			jQuery: 'jquery',
			$: 'jquery',
		}),
		new ExtractTextPlugin('[name].bundle.css', {
			allChunks: true,
		}),
		new HtmlWebpackPlugin({
      title: 'Template',
      inject: false,
      template: path.join(__dirname, 'src/frontend/index.ejs'),
      appMountId: 'app',
      mobile: true,
      applicationname: 'app',		}),
	],

	resolve: {
		root: [path.resolve(__dirname, 'node_modules')],
		modulesDirectories: ['node_modules', '.'],
		extensions: ['', '.js'],
	},
};
