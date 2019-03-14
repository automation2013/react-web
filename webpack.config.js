/**
 * @file webpack配置文件
 * @author automation13 <1271547283@qq.com>
 */

const path = require('path');

// plugins
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 简单创建 HTML 文件，用于服务器访问
const CleanWebpackPlugin = require('clean-webpack-plugin'); // A webpack plugin to remove/clean your build folder(s).

const config = {
    mode : 'development',
    entry: {
        app : path.join(__dirname, './src/app.js'),
        test: path.join(__dirname, './src/test.js'),
    },
    output: {
        path    : path.join(__dirname, './dist'),
        filename: '[name].[hash].bundle.js',
        // publicPath: "http://cdn.example.com/assets/[hash]/", // 如果使用cdn和hash可以放开这段注释。（https://www.webpackjs.com/concepts/output/）
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
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({ template: path.join(__dirname, './src/index.html'), filename: 'react.html', }),
    ],
};

module.exports = config;