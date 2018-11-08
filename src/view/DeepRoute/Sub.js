import React, { Component, PureComponent, } from 'react';
import { Link } from 'react-router-dom'

export default class Sub extends Component {//PureComponent

	constructor(props) {//props,context
		super(props);
	}

	render() {
		return (
			<div>
				<div>Sub</div>
				<Link to="sub/end">
					<div className='dib content' style={{textAlign:'center'}}>to end route</div>
				</Link>
			</div>
		);
	}
}