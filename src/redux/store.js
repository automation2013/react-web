/**
 * @file redux的store
 */

import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// reducers
import { example1 } from './reducers/example1';
import { example2 } from './reducers/example2';

const reducer = combineReducers({
    example1,
    example2,
});

// window.STATE_FROM_SERVER就是整个应用的状态初始值。如果提供了这个参数，它会覆盖 Reducer 函数的默认初始值
// http://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_one_basic_usages.html(阮一峰博客，共三篇)
const store = createStore(reducer, window.STATE_FROM_SERVER, applyMiddleware(thunk));

export { store };