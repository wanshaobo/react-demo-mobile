import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, HashRouter, Switch } from 'react-router-dom'
import './index.css';
// import routes from './routes'
import App from './App';
import Search from './view/Search';
import Notice from './view/Notice';
import Course from './view/Course';
import Exam from './view/Exam';
import StopBubble from './view/StopBubble';

import Context from './view/Context/Context';
import Super from './view/DeepRoute/Super';
import Sub from './view/DeepRoute/Sub';
import End from './view/DeepRoute/End';
import Parent from './view/MultiChild/Parent';
import Input from './view/Input';

// ReactDOM.render(<App />, document.getElementById('root'));

//两个路由方案：按需加载 常规加载
/*
路由顺序，深层路由在浅层路由上面
<Route path='/deeproute/sub' component={ Sub }></Route>
<Route path='/deeproute' component={ Super }></Route>
*/

ReactDOM.render(
	<HashRouter>
		<Switch>
			<Route path='/sec01' component={ Search }></Route>
			<Route path='/sec02' component={ Notice }></Route>
			<Route path='/sec03' component={ Course }></Route>
			<Route path='/pageview' component={ Exam }></Route>
			<Route path='/context' component={ Context }></Route>
			<Route path='/stopbubble' component={ StopBubble }></Route>
			<Route path='/deeproute/sub/end' component={ End }></Route>
			<Route path='/deeproute/sub' component={ Sub }></Route>
			<Route path='/deeproute' component={ Super }></Route>
			<Route path='/multichild' component={ Parent }></Route>
			<Route path='/input' component={ Input }></Route>
			<Route path='/' component={ App }></Route>
		</Switch>
	</HashRouter>,
document.getElementById('root'));
//如果有服务器端的动态支持，建议使用 BrowserRouter，否则建议使用 HashRouter。

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
