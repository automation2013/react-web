/**
 * @file webpack配置文件
 * @author automation13 <1271547283@qq.com>
 */

const path = require('path');

// plugins
let HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
    mode  : 'development',
    entry : path.join(__dirname, './index.js'),
    output: {
        path    : path.join(__dirname, './dist'),
        filename: 'react.bundle.js',
    },
    module: {
        rules: [
            {
                test   : /\.js$/,
                exclude: /node_modules/,
                loader : 'babel-loader',
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({ template: path.join(__dirname, './index.html'), filename: 'react.html', }),
    ],
};

module.exports = config;