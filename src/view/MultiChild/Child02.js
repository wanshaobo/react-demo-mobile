import React, { Component, PureComponent } from 'react';

export default class Child02 extends Component {//PureComponent

	constructor(props) {//props,context
		super(props);
		this.state = {
			child02name: 'sdkljf'
		}
	}

	shouldComponentUpdate(nextProps, nextState){
		return (this.props.video.volume != nextProps.video.volume)
	}

	//父元素调用子元素方法
	fireFromSuper(){
		console.log('父元素调用子元素方法成功了')
	}

	render() {
		console.log('Child02');
		return (
			<div>
				<div>Child02</div>
				<div>this.props.video.time{this.props.video.volume}</div>
			</div>
		);
	}
}