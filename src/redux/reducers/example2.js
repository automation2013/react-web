/**
 * @file 创建名字为example2的reducer，设置初始值
 */

import { createReducer } from '../createReducer';

const init = {
    x: 'example2-123',
    y: 'example2-456',
};
const example2 = createReducer('example2', init);

export { example2 };