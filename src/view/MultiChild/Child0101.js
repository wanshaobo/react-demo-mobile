import React, { Component, PureComponent } from 'react';


let info = {
	definition: 1,
		user: [1,2,3,4,5]
}
export default class Child0101 extends Component {//PureComponent

	constructor(props) {//props,context
		super(props);
	}

	render() {
		console.log('Child0101');
		return (
			<div style={{background:'#00FA9A'}}>
				<div>Child0101</div>
				<div>{this.props.value}</div>
				{this.props.info.user.map((item,index) => <div key={index}>{item + 'he'}</div>)}
			</div>
		);
	}
}