/**
 * @file 页面入口文件
 */

import React, { Component } from 'react';
import { Router } from 'react-router';
import { Route } from "react-router-dom";
import { Provider } from 'react-redux';

import { customHistory } from './enhance-router';
import { PageRoutes } from './PageRoutes';
import { store } from '../redux/store';

class App extends Component {

    render() {
        return (
            <React.StrictMode>
                <Provider store={store}>
                    <div id="global-pages-container">
                        <Router history={customHistory}>
                            <PageRoutes />
                        </Router>
                    </div>
                    {/* 非主业务流程的弹框建议单独渲染到新的DOM下，其他弹框可以接着往下写div元素 */}
                    <div id="global-popup-bottom" />
                </Provider>
            </React.StrictMode>
        );
    }
}

export default App;