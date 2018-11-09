import React, { Component, PureComponent } from 'react';
import ReactDOM from 'react-dom';

import '../css/common.css'

export default class Select extends Component {//PureComponent

	constructor(props) {
		super(props);
		this.state = {
			isInputshow: true//控制input是否渲染
		}
		this.time = Date.now();
		console.log(React.version);
	}

	render() {
		return <div>
			<div>select</div>
			<select name="" id="">
				<option value="1"></option>
				<option value="2"></option>
				<option value="3"></option>
				<option value="4"></option>
			</select>
		</div>
	}
}