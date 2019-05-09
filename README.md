# react-web
react框架的前端开发工程

## 工程搭建：


## 工程启动：
1、查看node版本，确定使用V8及以上的版本
2、npm run build 查看编译的产物


## 涉及开源框架

### webpack
|组件名|描述|参考|
---|:--:|---:
webpack | 打包工具 | https://www.webpackjs.com/
webpack-cli | 使用webpack时自动提示安装该插件 | 安装webpack4后直接编译js文件，控制台会有提示

#### webpack LOADERS
|组件名|描述|参考|
---|:--:|---:
style-loader | Adds CSS to the DOM by injecting a style tag | https://www.webpackjs.com/loaders/style-loader/
css-loader | 参考style-loader | https://www.webpackjs.com/loaders/css-loader/
sass-loader | Loads a SASS/SCSS file and compiles it to CSS. | https://www.webpackjs.com/loaders/sass-loader/
node-sass | 参考sass-loader | sass-loader的安装一项中提示要安装这个loader | 

#### webpack plugin
|组件名|描述|参考|
---|:--:|---:
html-webpack-plugin | HTML模板，webpack的产物直接塞入模板 | https://www.webpackjs.com/plugins/
clean-webpack-plugin | A webpack plugin to remove/clean your build folder(s). | https://www.webpackjs.com/guides/output-management/
extract-text-webpack-plugin | 从 bundle 中提取文本（CSS）到单独的文件 | https://www.webpackjs.com/plugins/extract-text-webpack-plugin/
webpack-manifest-plugin | Webpack plugin for generating an asset manifest. | https://www.webpackjs.com/guides/output-management/
webpack-dev-server | Use webpack with a development server that provides live reloading. | https://www.webpackjs.com/configuration/dev-server/

### babel
|组件名|描述|参考|
---|:--:|---:
@babel/core | babel核心库 | https://babel.docschina.org/docs/en/index.html
babel-loader | babel需要的webpack的loader | https://babel.docschina.org/setup#installation
@babel/preset-env | babel插件，转换ES2015+ | https://babel.docschina.org/setup#installation
@babel/preset-react | babel编译react的presets | https://babel.docschina.org/docs/en/presets
@babel/plugin-proposal-class-properties | babel编译class-properties的plugins | https://babel.docschina.org/docs/en/plugins
@babel/polyfill | This will emulate a full ES2015+ environment | https://babeljs.io/docs/en/babel-polyfill
@babel/plugin-transform-runtime | 可以重复使用Babel注入的帮助程序代码来节省代码 | https://babeljs.io/docs/en/babel-plugin-transform-runtime
@babel/runtime | https://babeljs.io/docs/en/babel-plugin-transform-runtime提示安装(配套@babel/plugin-transform-runtime) | https://babeljs.io/docs/en/babel-plugin-transform-runtime

### postcss
|组件名|描述|参考|
---|:--:|---:
postcss | PostCSS 是一个允许使用 JS 插件转换样式的工具 | https://github.com/postcss/postcss/blob/HEAD/README-cn.md https://postcss.org/
postcss-loader | postcss需要的webpack的loader | https://www.webpackjs.com/loaders/postcss-loader/
autoprefixer | 添加了 vendor 浏览器前缀，它使用 Can I Use 上面的数据 | https://github.com/postcss/postcss/blob/HEAD/README-cn.md
postcss-preset-env | 允许你使用未来的 CSS 特性 | https://github.com/postcss/postcss/blob/HEAD/README-cn.md
cssnano | 压缩webpack打包生成的css文件 | https://github.com/postcss/postcss/blob/HEAD/README-cn.md

### react
|组件名|描述|参考|
---|:--:|---:
react | react开源框架 | https://react.docschina.org/
react-dom | react开源框架需要的 | https://github.com/facebook/create-react-app### react
prop-types | react的props的类型检查 | https://react.docschina.org/docs/typechecking-with-proptypes.html
classnames | 方便地合并classNames | https://github.com/JedWatson/classnames
redux相关
redux | Redux 是负责组织 state 的工具 | http://cn.redux.js.org/ http://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_one_basic_usages.html
react-redux | Redux配套使用，将store挂在组件上 | http://cn.redux.js.org/docs/react-redux/ https://github.com/reduxjs/react-redux
router相关
react-router | 前端路由 | https://github.com/ReactTraining/react-router README.md中有官方文档
react-router-dom | react-router官方推荐(提供BrowserRouter、HashRouter等) | https://reacttraining.com/react-router/web/guides/quick-start
history | react-router推荐的history库 | https://github.com/ReactTraining/history

### 公共开源库
|组件名|描述|参考|
---|:--:|---:
normalize.css | CSS resets，处理浏览器默认样式的差异 | https://github.com/necolas/normalize.css
lodash | JavaScript对原生方法封装和加强的开源库 | https://lodash.com/docs/4.17.11

## 代码规范：

## 备注
1. extract-text-webpack-plugin: 这个用的是btea版，因为引入这个(大版本号为4)时还没正式版