import React, { Component, PureComponent, } from 'react';
import { Link, withRouter, NavLink,Router,Route } from 'react-router-dom'

import Super from './Super';

export default class Context extends Component {//PureComponent

	constructor(props) {//props,context
		super(props);
	}

	render() {
		console.log(this.props);//
		return (
			<div>123</div>
		);
	}
}