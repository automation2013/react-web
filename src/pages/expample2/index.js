/**
 * @file 页面Example2
 * @author automation13 <1271547283@qq.com>
 */

import React, { Component } from 'react';
import './index.scss';

import {EnhanceRouter} from '../../router/enhance-router';

class Example2 extends Component {

    componentDidMount() {
        console.log(EnhanceRouter.getParams())
    }

    goRouter = () => {
        EnhanceRouter.push('/Example3', {lastPage: 'Example2'})
    }

    render() {
        return (
            <section id="example2">
                <h2 className="title">
                    Example2
                </h2>
                <input placeholder="testStyle" style={{borderRadius: '11px', appearance: 'none'}} />
                <br/>
                <button onClick={this.goRouter}>跳router</button>
            </section>
        );
    }
}

export default Example2;