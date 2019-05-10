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
                    <Router history={customHistory}>
                        <div>
                            <PageRoutes />
                        </div>
                    </Router>
                </Provider>
            </React.StrictMode>
        );
    }
}

export default App;