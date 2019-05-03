/**
 * @file redux中生成reducer
 */

// lodash
import _set from 'lodash/set';
import _cloneDeep from 'lodash/cloneDeep';
import _isEmpty from 'lodash/isEmpty';
import _isUndefined from 'lodash/isUndefined';

/**
 * 创建reducer的工厂方法
 * @param reducerName reducer的名字，必须全局唯一
 * @param init 该reducerName的初始值
 * @return {Function}
 */
function createReducer(reducerName, init = {}) {
    return function(state = init, action) {
        const { type, path = [], newData, } = action || {};
        switch (type) {
            case `${reducerName}_UPDATE`: // 配合update函数使用，更新store
                if (_isEmpty(path)) { // 如果path为空则更新整个store
                    return newData;
                } else {
                    let stateClone = _cloneDeep(state);
                    const newState = _set(stateClone, path, newData);
                    return newState; // 更新reducer
                }
            default: // 设置reducer的初始值
                return state;
        }
    };
}

/**
 * dispatch的action工厂方法
 * @param reducerName reducer的名字，必须是createReducer创建的reducer的名字，注意：不能path为空数组，同时newData为undefined，此时新state为undefined会抛出异常
 * @param path 该reducer要更改的数据的路径
 * @param newData 新的数据
 * @return {{type: string, path: Array, newData: *}}
 */
function update(reducerName, path = [], newData) {
    if (_isUndefined(newData) && _isEmpty(path)) {
        console.error(JSON.stringify({ reducerName, path, newData, } + '，此时createReducer返回的新state为undefined，会抛出异常'));
    }
    return {
        type: `${reducerName}_UPDATE`,
        path,
        newData,
    };
}
export { createReducer, update };