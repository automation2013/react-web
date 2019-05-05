/**
 * @file 组件
 * @author automation13 <1271547283@qq.com>
 */

import React, { Component } from 'react';
import './index.scss';

import {store} from '../../redux/store';
import {update} from '../../redux/createReducer';
import {EnhanceRouter} from '../../router/enhance-router';

class Example1 extends Component {

    componentDidMount() {
        console.log(EnhanceRouter.getParams())
    }

    goRouter = () => {
        EnhanceRouter.push('/Example2', {lastPage: 'Example1'});
    }

    changeStore = () => {
        store.dispatch(update('example1', ['xx'], 123));
    }

    render() {
        return (
            <section id="example1">
                <h2 className="title" onClick={this.changeStore}>
                    Example1
                </h2>
                <input placeholder="testStyle" style={{borderRadius: '11px', appearance: 'none'}} />
                <br/>
                <button onClick={this.goRouter}>跳router</button>
            </section>
        );
    }
}

export default Example1;