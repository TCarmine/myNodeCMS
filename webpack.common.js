const webpack = require('webpack');
const path = require('path');

module.exports = {
	// This will be the entry file for all of our React code
	entry: [
		'./client/index.jsx',
	],
	// This will be where the final bundle file will be outputed
	output: {
		path: path.resolve(__dirname, './server/public/js/'),
		filename: 'bundle.js',
		publicPath: './server/public/js/',
  },
  // Adding babel loader to compile our javascript and jsx files
	module: {
		rules: [
			{
				// For pure CSS (without CSS modules)
				test: /\.css$/i,
				exclude: /\.module\.css$/i,
				use: ['css-loader'],
			  },
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
     			use: {
					loader: 'babel-loader',
					options: {
						// since Babel 7
						presets: ['@babel/react', '@babel/preset-env'],
			            plugins: ['@babel/plugin-proposal-class-properties']
					},
			    },
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: {
					loader: 'file-loader',
					options: {
					  name:'[name].[hash][ext]',
					  outputPath: './server/public/img'	
					},
				},
		    },
			
    ],
	},
	resolve: {
		extensions: ['.js', '.jsx', '.scss'],
	},
};