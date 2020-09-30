const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");

module.exports = {
	entry: "./src/index",
	mode: "development",
	devServer: {
		contentBase: path.join(__dirname, "dist"),
		port: 3002,
	},
	output: {
		publicPath: "http://localhost:3002/",
	},
	module: {
		rules: [
			{
				test: /\.(jsx|js)?$/,
				loader: "babel-loader",
				exclude: /node_modules/,
				options: {
					presets: ["@babel/preset-react"],
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
			name: "about",
			library: { type: "var", name: "about" },
			filename: "remoteEntry.js",
			exposes: {
				"./Button": "./src/Button",
				"./About": "./src/About",
			},
			shared: {
				react: { singleton: true },
				"react-dom": { singleton: true },
				"react-router-dom": { singleton: true},
				"style-loader": { singleton: true },
				"css-loader": { singleton: true },
				"react-redux": { singleton: true },
				"redux": { singleton: true },
			},
		}),
		new HtmlWebpackPlugin({
			template: "./public/index.html",
		}),
	],
};