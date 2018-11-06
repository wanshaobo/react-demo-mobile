import React, { Component, PureComponent, } from 'react';

const Color = ['#ff6700','#454565','#af6738']

export default class PageViewer extends Component {//PureComponent

	constructor(props) {//props,context
		super(props);
	}

	render() {
		return (
			<div>
				<div style={{height: '7rem',border:'0.1rem solid #ff4455'}}>1</div>
				<div style={{height: '7rem'}}>2</div>
				<div style={{height: '7rem'}}>3</div>
			</div>
		);
	}
}