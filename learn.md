flex-direction 主轴方向 column列 row行(默认)

justify-content 主轴 对齐方式 flex-start flex-end center space-between space-around
align-items 侧轴 对齐方式 flex-start flex-end center stretch baseline

react-router
exports.MemoryRouter = _MemoryRouter3.default;
exports.Prompt = _Prompt3.default;
exports.Redirect = _Redirect3.default;
exports.Route = _Route3.default;
exports.Router = _Router3.default;
exports.StaticRouter = _StaticRouter3.default;
exports.Switch = _Switch3.default;
exports.generatePath = _generatePath3.default;
exports.matchPath = _matchPath3.default;
exports.withRouter = _withRouter3.default;

react-router-dom
exports.BrowserRouter = _BrowserRouter3.default; 有响应请求的服务器
exports.HashRouter = _HashRouter3.default; 使用的是静态文件的服务器
exports.Link = _Link3.default;
exports.NavLink = _NavLink3.default;

MemoryRouter 组件在内存中保存“URL”信息，不会修改浏览器的地址栏，往往用于React Native或测试环境等非浏览器环境。
StaticRouter 组件从名字能看出它从不修改路由，这在服务器端渲染时很有用。
HashRouter 组件我们最为熟悉的路由组件不用再多赘述
BrowserRouter
<BrowserRouter>和<HashRouter>都可以实现前端路由的功能，区别是前者基于url的pathname段，后者基于hash段。

create-react-app 默认脚本
 "start": "react-scripts start",
 
Webpack 用来做模块热替换(hot module replacement)
https://segmentfault.com/a/1190000003872635

#### Error
1、第一个<有问题
ERROR in ./src/index.js
Module build failed (from ./node_modules/babel-loader/lib/index.js):
SyntaxError: D:\project\miedu-react\src\index.js: Unexpected token (21:1)
  19 |
  20 | ReactDOM.render(
> 21 |  <HashRouter>
     |  ^
  22 |          <App/>
  23 |  </HashRouter>,
  24 |  document.getElementById('root')
  
>解决方案：手动加入.babelrc文件
.babelrc配置文件中，主要是对预设（presets）和插件（plugins）进行配置
rc结尾的文件通常代表运行时自动加载的文件||配置

#### bundle包2.35M，从服务器请求到本地成了522KB，浏览器传输过程中进行gzip处理

#### 官网
https://babeljs.io/
https://reacttraining.com/react-router/web/api/HashRouter 英文原版
https://react-router.docschina.org 中文翻译
https://react.docschina.org/
http://www.wulv.site/2017-05-31/react-purecomponent.html React PureComponent 使用指南
https://react-guide.github.io/react-router-cn/index.html React Router 3 中文文档
https://github.com/postcss/postcss

device pixel ratio 设备像素比 
iphont plus 3 
iphone 2
mi1
18:9 的屏幕2.625

postcss 解决浏览器兼容性问题，补全css前缀
Autoprefixer是一个根据can i use解析css并且为其添加浏览器厂商前缀的PostCSS插件

垂直间隙问题，设父元素fontSize: 0
<div style={{fontSize: 0}}>
	<img src={require('./img/home/exam.png')} />
	<div style={{width: "2rem",height: "2rem", background: "#ff6700"}}></div>
</div>

两个inline-block子元素，顶部不能对其，设子元素vertical-align:top
<div>
	<Link to="search"><img className="search" src={require('./img/home/search.png')} /></Link>
	<Link to="notice"><img className="message" src={require('./img/home/message.png')} /></Link>
</div>


#### redux
- [react-redux github](https://github.com/reduxjs/react-redux/blob/master/docs/api.md)
- [Redux 中文文档](https://www.redux.org.cn/)

Provider的作用类似于提供一个大容器，将组件和Redux进行关联
connect函数到底是如何将store和组件联系在一起
React的Context,Context解决了一个React中很常见的问题：当你的组件嵌套越来越深的时候，context能让你父组件和其它里层组件之间的通信变的更方便

[JavaScript 对象详解](http://www.365mini.com/page/javascript-new-array.htm)

