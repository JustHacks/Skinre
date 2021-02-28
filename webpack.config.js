const HtmlWebpackPlugin = require('html-webpack-plugin');
const { resolve } = require('path');

module.exports = {
    entry: './src/index.jsx',
    mode: 'development',
    output: {
        path: resolve(__dirname, './dist')
    },
    module: {
        rules: [
            {
                test:  /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader'
                ]
            },
			{
        		test: /\.(png|svg|jpg|jpeg|gif)$/,
     			type: 'asset/resource',
      		},
            {
                test: /\.jsx?$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [ '@babel/preset-react' ]
                    },
                },
            },
        ],
		},
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
    devServer: {
        contentBase: resolve(__dirname, 'dist'),
        port: 9000,
        host: "0.0.0.0",
        allowedHosts: [
            ".repl.it",
            ".repl.co",
            ".repl.run"
        ]
    }
}