/**
 * @file postcss配置文件
 * @author automation13 <1271547283@qq.com>
 */

const pxtovw = require('postcss-px-to-viewport');

module.exports = {
    plugins: [
        require('autoprefixer'),
        require('postcss-preset-env'),
        require('cssnano'),
        pxtovw({
            unitToConvert    : 'px', // 对于不想转换的css长度可以使用"PX"
            viewportWidth    : 375,
            unitPrecision    : 2,
            propList         : ['*'],
            viewportUnit     : 'vw',
            fontViewportUnit : 'vw',
            selectorBlackList: [],
            minPixelValue    : 0,
            mediaQuery       : false,
            replace          : true,
            exclude          : [],
            landscape        : false,
            landscapeUnit    : 'vw',
            landscapeWidth   : 667,
        }),
    ],
};