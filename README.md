# react-web
react框架的前端开发工程

工程搭建：


工程启动：
1、查看node版本，确定使用V8及以上的版本
2、npm run build 查看编译的产物


## 涉及开源框架：
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

### babel
|组件名|描述|参考|
---|:--:|---:
@babel/core | babel核心库 | https://babel.docschina.org/docs/en/index.html
babel-loader | babel需要的webpack的loader | https://babel.docschina.org/setup#installation
@babel/preset-env | babel插件，转换ES2015+ | https://babel.docschina.org/setup#installation
@babel/preset-react | babel编译react的presets | https://babel.docschina.org/docs/en/presets
@babel/plugin-proposal-class-properties | babel编译class-properties的plugins | https://babel.docschina.org/docs/en/plugins
@babel/polyfill | This will emulate a full ES2015+ environment | https://babeljs.io/docs/en/babel-polyfill


### react
|组件名|描述|参考|
---|:--:|---:
react | react开源框架 | https://react.docschina.org/
react-dom | react开源框架需要的 | https://github.com/facebook/create-react-app

## 代码规范：

## 备注
1. extract-text-webpack-plugin: 这个用的是btea版，因为当时还没正式版