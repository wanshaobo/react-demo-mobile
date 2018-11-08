import React, { Component, PureComponent } from 'react';

import Child0101 from './Child0101';

let a = {
	time: 123,
	volume: 'high',
	info:{
		definition: 1,
		user: [1,2,3,4,5]
	}
}

/*
PureComponent缺点：
	子元素从props获取父元素中的state数据，当父元素setState改变数据时，子元素不会触发render，很致命
	同时PureComponent的子元素也不会触发render
	建议：PureComponent放在组件末级，并且不能使用引用类型数据
*/

export default class Child01 extends PureComponent {//PureComponent

	constructor(props) {//props,context
		super(props);
	}

	render() {
		console.log('Child01');
		return (
			<div style={{background:'#ffcccc'}}>
				Child01
				<div>{this.props.value}</div>
				<Child0101 info={this.props.video.info} value={this.props.value}/>
				<div>{this.props.video.time}</div>
				{this.props.video.info.user.map((item,index) => <div key={index}>{item + 'me'}</div>)}
			</div>
		);
	}
}