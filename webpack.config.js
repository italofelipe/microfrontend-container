const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	mode: "development",
	devServer: {
		port: 8080
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				loader: "ts-loader",
				exclude: /node_modules/
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "public/index.html"
		})
	],
  resolve: {
		extensions: [".ts", ".tsx", ".js"]
	},
};
