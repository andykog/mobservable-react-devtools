var path = require('path');
var webpack = require('webpack');
var NODE_ENV = process.env.NODE_ENV;
module.exports = {
	context: path.resolve(__dirname, '../'),
	entry: {
		'todomvc': [
			'webpack-dev-server/client?http://localhost:8080',
			'webpack/hot/only-dev-server',
			'./play/todomvc/client'
		],
	},
	output: {
		path: path.resolve(__dirname, '../dist'),
		publicPath: '/dist/',
		filename: '[name].bundle.js',
		chunkFilename: '[name].js',
		sourceMapFilename: 'debugging/[file].map',
		library: 'reactiform',
		libraryTarget: 'var',
		pathinfo: NODE_ENV === 'development',
	},
	target: 'web',
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /(node_modules)/,
				loader: 'babel',
				query: {
					cacheDirectory: true,
					presets: ['es2015'],
					plugins: ['transform-class-properties', 'transform-decorators-legacy']
				}
			},
			{
				test: /\.tsx?$/,
				exclude: /(node_modules)/,
				loader: 'ts-loader',
			},
			{
				test: /\.svg$/,
				loader: 'url-loader'
			}
		],
	},
	devtool: 'source-map',
	debug: false,
	resolveLoader: {
		root: path.resolve(__dirname, '../node_modules'),
	},
	resolve: {
		root: path.resolve(__dirname),
		modulesDirectories: ['node_modules'],
		extensions: ['', '.js', '.jsx', '.ts', '.tsx'],
		// alias: {
		// 	mobx: path.resolve(__dirname, '../src/mobx')
		// },
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env': { NODE_ENV: JSON.stringify(NODE_ENV) },
		}),
		new webpack.HotModuleReplacementPlugin(),
	],
	devServer: {
		contentBase: './play/',
		historyApiFallback: false,
		stats: {
			cached: false,
			exclude: [],
		},
	},
	watchOptions: {
		poll: true,
	},
};
