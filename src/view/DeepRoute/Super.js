import React, { Component, PureComponent, } from 'react';
import { Link, withRouter, NavLink } from 'react-router-dom'

import '../../css/common.css'

export default class Super extends Component {//PureComponent

	constructor(props) {//props,context
		super(props);
	}

	render() {
		return (
			<div>
				<div>Super</div>
				<Link to="deeproute/sub">
					<div className='dib content' style={{textAlign:'center'}}>to sub</div>
				</Link>
			</div>
		);
	}
}