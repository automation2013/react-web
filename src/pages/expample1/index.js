/**
 * @file 组件
 * @author automation13 <1271547283@qq.com>
 */

import React, { Component } from 'react';
import './index.scss';

class Example1 extends Component {

    showAlert = () => {
        alert('这是个hollo world!')
    }

    render() {
        return (
            <section id="example1" onClick={this.showAlert}>
                <h2 className="title">
                    Example1
                </h2>
                <input placeholder="testStyle" style={{borderRadius: '11px', appearance: 'none'}} />
            </section>
        );
    }
}

export default Example1;