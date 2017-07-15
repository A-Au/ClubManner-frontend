var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
var APP_DIR = path.resolve(__dirname, 'src/client/app');

var config = {
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },

  module : {
  	loaders : [
	  	{
	  		test : /\.jsx?/,
	  		include : APP_DIR,
	  		exclude: /node_modules/,
	  		loader: ['babel-loader', 'eslint-loader']
	  	},
	  	{
	  		test : /\.css/,
	  		exclude: /node_modules/,
	  		loader: ['style-loader','css-loader'],
	  		include : APP_DIR,
	  	},
	  	{
	  		test : /\.(png|jpg)$/,
	  		loader : 'url-loader'
	  	}
  	]
  }
};

module.exports = config;