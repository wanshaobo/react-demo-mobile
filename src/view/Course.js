import React, { Component, PureComponent, } from 'react';

import '../css/course.css'

export default class Course extends Component {//PureComponent

	constructor(props) {//props,context
		super(props);
		this.state = {
			dpr: 0,
			info:''
		};
	}

	componentDidMount(){

	}

	getDpr(){
		var dpr = window.devicePixelRatio;
		this.setState({
			dpr
		});
	}

	getInfo(){
		var info = navigator.userAgent
		this.setState({
			info
		});
	}

	render() {
		return (
			<div>
				<button className='button' onClick={()=>{this.getDpr()}}>获取device pixel ratio</button>
				<div>你手机的der：{this.state.dpr == 0 ? "" : this.state.dpr}</div>
				<button className='button' onClick={()=>{this.getInfo()}}>获取device pixel ratio</button>
				<div>你手机的信息：{this.state.info}</div>
			</div>
		);
	}
}