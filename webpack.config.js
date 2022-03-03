const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: {
		main: path.resolve(__dirname, 'css/app.js'),
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].[contenthash].js',
        assetModuleFilename:'[name][ext]',
		clean: true,
	},
	devtool: 'source-map',
	devServer: {
		static: {
			directory: path.resolve(__dirname, 'dist'),
		},
		port: 9000,
	},

	module: {
		rules: [
			{ test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
            {test:/\.(svg|png|jpg|gif|jpeg)$/,type:'asset/resource'},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'],
					},
				},
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Just a demo',
			filename: 'index.html',
			template: path.resolve(__dirname, 'css/temp.html'),
		}),
	],
};
