/**
 * @file webpack配置文件
 * @author automation13 <1271547283@qq.com>
 */

const path = require('path');

// plugins
const webpack = require('webpack'); // 访问内置的插件
const CleanWebpackPlugin = require('clean-webpack-plugin'); // A webpack plugin to remove/clean your build folder(s).
const ManifestPlugin = require('webpack-manifest-plugin'); // Webpack plugin for generating an asset manifest.
const ExtractTextPlugin = require('extract-text-webpack-plugin'); // 从 bundle 中提取文本（CSS）到单独的文件
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 简单创建 HTML 文件，用于服务器访问

const config = {
    mode   : 'development',
    // webpack 的主目录
    // entry 和 module.rules.loader 选项
    context: __dirname,
    entry  : {
        app : './src/app.js',
        test: './src/test.js',
    },
    output: {
        path    : path.join(__dirname, './dist'),
        filename: '[hash]/[name].bundle.[id].js',
        // publicPath: "http://cdn.example.com/assets/", // 如果使用cdn和hash可以放开这段注释。（https://www.webpackjs.com/concepts/output/）
    },
    module: {
        rules: [
            {
                test: /\.css|\.scss$/,
                use : ExtractTextPlugin.extract({
                    fallback: 'style-loader', // 将 JS 字符串生成为 style 节点
                    use     : [{
                        loader: 'css-loader', // 将 CSS 转化成 CommonJS 模块
                    }, {
                        loader: 'postcss-loader', // CSS 预处理
                    }, {
                        loader: 'sass-loader', // 将 Sass 编译成 CSS (@import "~bootstrap/dist/css/bootstrap";   ~告诉 webpack 它不是一个相对路径，这样就可以 import 导入 node_modules 目录里面的 sass 模块)
                    }],
                }),
            }, {
                test   : /\.js$/,
                exclude: /node_modules/,
                loader : 'babel-loader',
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new ManifestPlugin({ fileName: 'manifest.json', }),
        new ExtractTextPlugin({ filename: '[hash]/[name].style.[id].css', }),
        new HtmlWebpackPlugin({ template: path.join(__dirname, './src/index.html'), filename: 'react.html', }),
    ],
    devServer: { // webpack-dev-server 配置
        contentBase: path.join(__dirname, 'dist'),
        compress   : true, // gzip
        port       : 3000, // 端口号
    },
};

module.exports = config;