const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const path = require('path');

module.exports = {
	entry: './src/index',
	mode: 'development',
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		port: 3001,
	},
	output: {
		publicPath: 'http://localhost:3001/',
	},
	module: {
		rules: [
			{
				test: /bootstrap\.js$/,
				loader: 'bundle-loader',
				options: {
					lazy: true,
				},
			},
			{
				test: /\.jsx?$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				options: {
					presets: ['@babel/preset-react'],
				},
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			}
		],
	},
	plugins: [
		new ModuleFederationPlugin({
			name: 'root',
			remotes: {
				about: 'about@http://localhost:3002/remoteEntry.js',
			},
			shared: {
				react: { singleton: true },
				"react-dom": { singleton: true },
				"react-router-dom": { singleton: true},
				"style-loader": { singleton: true },
				"css-loader": { singleton: true },
			},
		}),
		new HtmlWebpackPlugin({
			template: './public/index.html',
		}),
	],
};