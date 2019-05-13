/**
 * @file 处理localStorage的封装方法的配置文件，不允许直接使用localStorage的原生方法（配置文件中: key,封装方法中使用的localStorage的名字; value,该localStorage的配置）
 * @author automation13 <1271547283@qq.com>
 */
const LOCALSTORAGE_CONFIG = {
    example1: {
        nameShow: 'REACT_WEB_1', // 浏览器中展示的名字
        // clearWhenLogout: true, // 退出登录时是否清除该localStorage, 暂时未用，这里仅仅是个示例
    },
    example2: {
        nameShow: 'REACT_WEB_2',
    },
};

export { LOCALSTORAGE_CONFIG };