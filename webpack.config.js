var webpack = require('webpack');

module.exports = {
	entry: [
		'webpack/hot/only-dev-server',
		"./scripts/app.js"
	],
	output: {
		path: __dirname + '/build',
		filename: "bundle.js"
	},
	module: {
		loaders: [
			{ test: /\.js?$/, loaders: ['react-hot', 'babel'], exclude: /node_modules/ },
			{ test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
			{ test: /\.styl$/, loader: 'style-loader!css-loader!stylus-loader' }
		]
	},
	plugins: [
		new webpack.NoErrorsPlugin()
	]
};