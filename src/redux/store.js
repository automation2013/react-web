/**
 * @file redux的store
 */

import { combineReducers, createStore } from 'redux';

// reducers
import { example1 } from './reducers/example1';
import { example2 } from './reducers/example2';

const reducer = combineReducers({
    example1,
    example2,
});

const store = createStore(reducer);

export { store };