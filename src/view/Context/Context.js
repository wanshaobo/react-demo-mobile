import React, { Component, PureComponent, } from 'react';
import { Link, withRouter, NavLink,Router,Route } from 'react-router-dom'

import Super from './Super';

export default class Context extends Component {//PureComponent

	constructor(props) {//props,context
		super(props);
	}

	render() {
		return (
			<Router>
				<div>
					<div>父子组件通信</div>
					<Link to="super">
						<div className='dib content' style={{textAlign:'center'}}>获取手机硬件信息入口</div>
					</Link>
				</div>
				<Route exact path="/super" component={ Super }/>
			</Router>
		);
	}
}