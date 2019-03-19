/**
 * @file 组件
 * @author automation13 <1271547283@qq.com>
 */

import React, { Component } from 'react';
import './index.scss';

class Example1 extends Component {
    render() {
        return (
            <div id="example1">
                <h2 className="title">
                    Example1
                </h2>
                <input placeholder="testStyle" style={{borderRadius: '11px', appearance: 'none'}} />
            </div>
        );
    }
}

export default Example1;