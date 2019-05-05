/**
 * @file react-router路由跳转函数封装
 */

import { createBrowserHistory } from 'history';

const customHistory = createBrowserHistory();

// lodash
import _get from 'lodash/get';

class EnhanceRouter {

    static push = (path, params = {}) => {
        customHistory.push(path, params)
    }

    static replace = (path, params = {}) => {
        customHistory.replace(path, params)
    }

    static goBack = () => {
        customHistory.goBack();
    }

    static getParams = () => {
        const location = customHistory.location;
        const param = _get(location, ['state']) || {};
        return param;
    }
}

export {EnhanceRouter, customHistory}