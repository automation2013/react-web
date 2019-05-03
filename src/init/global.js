/**
 * @file 全局处理
 */

import { store } from '../redux/store';

// 将redux的store挂在window上方便代码调试
(function setStore() {
    window.store = store;
})();