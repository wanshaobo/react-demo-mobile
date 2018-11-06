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
import Super from './view/Context/Super';
import Sub from './view/Context/Sub';
// ReactDOM.render(<App />, document.getElementById('root'));

//两个路由方案：按需加载 常规加载

ReactDOM.render(
	<HashRouter>
		<Switch>
			<Route path='/sec01' component={ Search }></Route>
			<Route path='/sec02' component={ Notice }></Route>
			<Route path='/sec03' component={ Course }></Route>
			<Route path='/sec04' component={ Exam }></Route>
			<Route path='/sec05' component={ Context }></Route>
			<Route path='/sec05/sec0501' component={ Context }></Route>
			<Route path='/sec06' component={ StopBubble }></Route>
			<Route path='/' component={ App }></Route>
		</Switch>
	</HashRouter>,
document.getElementById('root'));
//如果有服务器端的动态支持，建议使用 BrowserRouter，否则建议使用 HashRouter。

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
