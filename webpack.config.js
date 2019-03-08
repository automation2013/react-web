/**
 * @file webpack配置文件
 * @author automation13 <1271547283@qq.com>
 */

const path = require('path');

const config = {
    mode  : 'development',
    entry : path.join(__dirname, './test.js'),
    output: {
        path    : path.join(__dirname, './dist'),
        filename: 'react.bundle.js',
    },
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader', },
        ],
    },
};

module.exports = config;