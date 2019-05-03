/**
 * @file 创建名字为example1的reducer，设置初始值
 */

import { createReducer } from '../createReducer';

const init = {
    x: 'example1-123',
    y: 'example1-456',
};
const example1 = createReducer('example1', init);

export { example1 };