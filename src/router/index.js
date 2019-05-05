/**
 * @file 页面入口文件
 */

import React, { Component } from 'react';
import { Router } from 'react-router';
import { Route } from "react-router-dom";
import {customHistory} from './enhance-router';

import {PageRoutes} from './PageRoutes';

function App() {
    return (
        <Router history={customHistory}>
            <div>
                <PageRoutes />
            </div>
        </Router>
    );
}

export default App;