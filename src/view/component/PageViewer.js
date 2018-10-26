import React, { Component, PureComponent, } from 'react';

const Color = ['#ff6700','#454565','#af6738']

export default class PageViewer extends Component {//PureComponent

	constructor(props) {//props,context
		super(props);
	}

	render() {
		console.log(this.props.index);
		return (
			<div>
				<div style={{background: Color[this.props.index],height: '7rem'}}></div>
				<div style={{background: Color[this.props.index],height: '7rem'}}></div>
				<div style={{background: Color[this.props.index],height: '7rem'}}></div>
			</div>
		);
	}
}