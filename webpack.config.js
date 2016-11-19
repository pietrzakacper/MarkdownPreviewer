var path = require( 'path' );
var webpack = require( 'webpack' );

module.exports = {
	entry: './js/main.jsx',
	output: { path: __dirname, filename: 'dist/js/main.js' },
	module: {
		loaders: [ {
				test: /\.json$/,
				loader: 'json'
			},
			{
				test: /.jsx?$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				query: {
					presets: [ 'es2015', 'react' ]
				}
			}
		]
	},
};
