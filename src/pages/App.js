/**
 * @file 页面入口文件
 * @author automation13 <1271547283@qq.com>
 */

import React, { Component } from 'react';

// 业务页面
import Expample1 from './expample1';

class App extends Component {
    render() {
        return (
            <div id="app">
                <h1>
                    Hello world!
                </h1>
                <Expample1 />
            </div>
        )
    }
}

export default App;