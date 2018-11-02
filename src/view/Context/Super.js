import React, { Component, PureComponent, } from 'react';
import { Link, withRouter, NavLink } from 'react-router-dom'

export default class Super extends Component {//PureComponent

	constructor(props) {//props,context
		super(props);
	}

	render() {
		return (
			<div>
				<div>Super</div>
				<Link to="sub">
					<div className='dib content' style={{textAlign:'center'}}>获取手机硬件信息入口</div>
				</Link>
			</div>
		);
	}
}