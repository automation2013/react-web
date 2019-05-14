/**
 * @file localStorage自定义方法合集，不允许直接使用localStorage的原生方法(设置localStorage时如有特殊要求可考虑用MD5等加密)
 * @author automation13 <1271547283@qq.com>
 */

import { LOCALSTORAGE_CONFIG } from '../config/localStorage';

// lodash
import _get from 'lodash/get';
import _isObject from 'lodash/isObject';

/**
 * 封装原生的localStorage.setItem方法
 * @param { string } name localStorage的key，需先在'/config/localStorage.js'文件配置
 * @param { Object } value localStorage的value，为使用方便统一使用普通对象(不要使用Array、Date、Function、Blob、String等)
 */
function enhanceSetLocalStorage(name, value = {}) {
    const localStorageName = _get(LOCALSTORAGE_CONFIG, [name, 'nameShow']);
    if (!localStorageName) {
        return console.error(`${name}未配置，设置localStorage前请在'/config/localStorage.js'中配置localStorage`);
    }
    if (!_isObject(value)) { // 简单拦截下Number、String等容易不合规的数据类型
        return console.error('{为使用方便，设置的localStorage的值必须是对象}');
    }
    let valueString = '{}';
    try {
        valueString = JSON.stringify(value || {});
    } catch (e) {
        console.error(e);
    }
    window.localStorage.setItem(localStorageName, valueString);
}

/**
 * 封装原生的localStorage.getItem方法
 * @param { string } name localStorage的key，需先在'/config/localStorage.js'文件配置
 * @return { Object } localStorage的值，一定是非空对象
 */
function enhanceGetLocalStorage(name) {
    const localStorageName = _get(LOCALSTORAGE_CONFIG, [name, 'nameShow']);
    if (!localStorageName) {
        return console.error(`${name}未配置，获取localStorage前请先在'/config/localStorage.js'中配置localStorage`);
    }
    let valueString = window.localStorage.getItem(localStorageName);
    let valueObj = {};
    try {
        valueObj = JSON.parse(valueString) || {};
    } catch (e) {
        console.error(e);
    }
    return valueObj;
}

/**
 * 封装原生的localStorage.removeItem方法
 * @param { string } name localStorage的key，需先在'/config/localStorage.js'文件配置
 */
function enhanceClearLocalStorage(name) {
    const localStorageName = _get(LOCALSTORAGE_CONFIG, [name, 'nameShow']);
    if (!localStorageName) {
        return console.error(`${name}未配置，删除localStorage前请先在'/config/localStorage.js'中配置localStorage`);
    }
    window.localStorage.removeItem(localStorageName);
}

export {
    enhanceSetLocalStorage, // 封装原生的localStorage.setItem方法
    enhanceGetLocalStorage, // 封装原生的localStorage.getItem方法
    enhanceClearLocalStorage, // 封装原生的localStorage.removeItem方法
};