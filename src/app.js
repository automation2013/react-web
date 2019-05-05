/**
 * @file 工程入口文件
 * @author automation13 <1271547283@qq.com>
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// 处理浏览器默认样式的差异
import './styles/resets.scss';

// 工程初始化
import './init';

// 组件
import App from './router';

ReactDOM.render(
    <App />,
    document.getElementById('root')
);