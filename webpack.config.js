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
                test: /\.jsx$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [ '@babel/preset-react' ]
                    }
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
};