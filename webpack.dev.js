const webpack = require('webpack');
const path = require('path');
const common = require('./webpack.common');
const merge = require('html-webpack-plugin');

module.exports = merge(common,{
  // Since webpack 4 we will need to set in what mode webpack is running,
  // in dev webpack does not minify
  mode: 'development',
  // avoid use of eval

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
				use: [
					{
					  loader: 'url-loader',
					  options: {
						bypassOnDebug: true, // webpack@1.x
						disable: true, // webpack@2.x and newer
						publicPath: './server/public/img',
                        outputPath: './server/public/img'
					  },
					},
				  ],
		    },
			
    ],
	},
	resolve: {
		extensions: ['.js', '.jsx', '.scss'],
	},
};