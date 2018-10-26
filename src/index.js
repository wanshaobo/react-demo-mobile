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
// ReactDOM.render(<App />, document.getElementById('root'));

//两个路由方案：按需加载 常规加载

ReactDOM.render(
	<HashRouter>
		<Switch>
			<Route path='/search' component={ Search }></Route>
			<Route path='/notice' component={ Notice }></Route>
			<Route path='/course' component={ Course }></Route>
			<Route path='/exam' component={ Exam }></Route>
			<Route path='/' component={ App }></Route>
		</Switch>
	</HashRouter>,
document.getElementById('root'));
//如果有服务器端的动态支持，建议使用 BrowserRouter，否则建议使用 HashRouter。

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
