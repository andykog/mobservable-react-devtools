var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.play.config.js');

new WebpackDevServer(webpack(config), {
	publicPath: config.output.publicPath,
	contentBase: './play',
})
	.listen(8080, 'localhost', function (err, result) {
		if (err) {
			console.error(err);
		} else {
			console.log('Listening at localhost:8080');
		}
	});