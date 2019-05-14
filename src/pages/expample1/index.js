/**
 * @file 组件
 * @author automation13 <1271547283@qq.com>
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';
import './index.scss';

import {store} from '../../redux/store';
import {update} from '../../redux/createReducer';
import {EnhanceRouter} from '../../router/enhance-router';

// 组件
import PopupBottom from '../../components/popup-bottom';

// lodash
import _get from 'lodash/get';

function updateStoreASync() {
    return (dispatch, getState) => {
        setTimeout(() => {
            let num2 = _get(getState(), ['example1', 'num2']);
            dispatch(update('example1', ['num2'], ++num2));
        }, 1000);
    }
}

class Example1 extends Component {

    componentDidMount() {
        console.log(EnhanceRouter.getParams())
    }

    goRouter = () => {
        EnhanceRouter.push('/Example2', {lastPage: 'Example1'});
    }

    /**
     * 同步更新store
     */
    changeStoreSync = () => {
        let num1 = _get(store.getState(), ['example1', 'num1']);
        store.dispatch(update('example1', ['num1'], ++num1));
    }

    /**
     * 异步更新store
     */
    changeStoreAsync = () => {
        store.dispatch(updateStoreASync());
    }

    showPopUp = () => {
        PopupBottom.show({
            componentShow: (<div style={{width: '100%', height: '200px', backgroundColor: 'red'}}>aaa</div>),
            canClickMask: true,
        })
    }
    render() {
        const {example1 = {}} = this.props;
        const {num1, num2} = example1;

        return (
            <section id="example1">
                <h2 className="title">
                    Example1
                </h2>
                <div onClick={this.showPopUp} className="popup-btn">弹框</div>
                <div className={classnames({redStyle: num1 > 2})}>num1: {num1}</div>
                <button  onClick={this.changeStoreSync}>同步更新store按钮</button>
                <br/>
                <div className={classnames({redStyle: num2 > 2})}>num2: {num2}</div>
                <button  onClick={this.changeStoreAsync}>异步更新store按钮</button>
                <br/>
                <input placeholder="testStyle" style={{borderRadius: '11px', appearance: 'none'}} />
                <br/>
                <button onClick={this.goRouter}>跳router</button>
            </section>
        );
    }
}

const mapStateToProps = (state) => {
    const {example1} = state;
    return {
        example1,
    }
}

const mapStateToProps2 = (state) => {
    const {example2} = state;
    return {
        example2,
    }
}

export default connect(
    mapStateToProps,
    mapStateToProps2,
)(Example1);