/**
 * @file 组件
 * @author automation13 <1271547283@qq.com>
 */

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import './index.scss';

const NOOP = () => {};
const HIDE_ANIMATION_TIME = 200; // 出场动画时间，这个要和scss文件的$HIDE_ANIMATION_TIME变量保持一致

class PopupBottom extends Component {

    static propTypes = {
        componentShow: PropTypes.object.isRequired, // 弹框需要展示的React组件
        canClickMask: PropTypes.bool, // 蒙层是否可点
    }

    static defaultProps = {
        componentShow: null,
        canClickMask: true,
    }

    /**
     * 展示组件，调用方法：PopupBottom.show(param)
     * @public
     * @param param
     */
    static show = (param = {}) => {
        const {componentShow, callback = NOOP, canClickMask} = param; // callback: 出场后的回调函数
        PopupBottom.callback = callback;
        ReactDOM.render(
            <PopupBottom
                canClickMask={canClickMask}
                componentShow={componentShow}
            />,
            document.getElementById('global-popup-bottom')
        );
    }

    /**
     * 销毁组件，调用方法：PopupBottom.hide()
     * @public
     */
    static hide = () => {
        const maskDOM = document.getElementById('global-popup-bottom').getElementsByClassName('popup-mask')[0];
        const popupContentDOM = document.getElementById('global-popup-bottom').getElementsByClassName('popup-content')[0];
        maskDOM.classList.remove('popup-show-animation-ocupty');
        maskDOM.classList.add('popup-hide-animation-ocupty');
        popupContentDOM.classList.remove('popup-show-animation-location');
        popupContentDOM.classList.add('popup-hide-animation-location');
        setTimeout(() => {
            ReactDOM.render(
                null,
                document.getElementById('global-popup-bottom'),
                () => {
                    PopupBottom.callback();
                }
            );
        }, HIDE_ANIMATION_TIME);
    }

    onClickMask = () => {
        const {canClickMask} = this.props;
        if(!canClickMask) {
            return;
        }
        PopupBottom.hide();
    }

    render() {
        const {componentShow = null} = this.props;
        return (
            <section className="popup-bottom">
                <div className="popup-mask popup-show-animation-ocupty" onClick={this.onClickMask} />
                <div className="popup-content popup-show-animation-location">
                    {
                        componentShow
                    }
                </div>
            </section>
        );
    }
}

export default PopupBottom;