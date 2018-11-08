import React, { Component, PureComponent } from 'react';

export default class Child03 extends Component {//PureComponent

	constructor(props) {//props,context
		super(props);
	}

	render() {
		console.log('Child03');
		return (
			<div>
				Child03
			</div>
		);
	}
}