import React, { Component, PureComponent } from 'react';
import ReactDOM from 'react-dom';

import '../css/common.css'

export default class Input extends Component {//PureComponent

	constructor(props) {
		super(props);
		this.state = {
			isInputshow: true//控制input是否渲染
		}
		this.time = Date.now();
	}

	//ref用法一：用ref给input绑定一个函数，这个函数可以直接获取这个DOM元素。当这个input元素显示，自动调用获取焦点
	inputRefcb(instance){
		if(instance) {//确保不为null
			instance.focus();
		}else{
			console.log('Input unmount')
		}
	}

	//该回调有三种触发时机:
	// 组件被渲染后 回调参数instance 为input的dom对象
	// 组件被卸载后 回调参数instance 为null,确保内存不被泄露
	// ref改变后
	getDiv(instance){
		console.log(instance)
	}

	onFocus(){
		this.refs.inputRef.focus();
	}

	change(){
		if(Date.now() - this.time > 1000){//函数节流方案
			console.log(this.refs.inputRef.value);
			this.time = Date.now();
		}
	}

	//以下提供三种方法：
	// 1.js 常规dom操作方式，通过id获取dom
	// 2.react原生函数findDOMNode获取dom
	// 3.通过ref来定位一个组件，切记ref要全局唯一（类似id）
	getDom(){
		var dom1 = document.getElementById('dom1');
		console.log(dom1.innerHTML)
		console.log(ReactDOM.findDOMNode(dom1).innerHTML)
		console.log(this.refs.dom2.innerHTML)

		console.log('ReactDOM.findDOMNode(this.refs.dom1Ref).innerHTML',ReactDOM.findDOMNode(this.refs.dom1Ref).innerHTML)
	}

	render() {
		return <div>
			<div ref={this.getDiv}>这个div的ref绑定了一个函数</div>
			{this.state.isInputshow ? <div><input className='myInput' ref={this.inputRefcb} type="text" placeholder="请输入" /></div> : null}
			<div>下面这个input的ref绑定了一个字符串</div>
			<input className='myInput' ref='inputRef' onClick={this.onFocus.bind(this)} onChange={this.change.bind(this)} />
			<br />
			<div className='btn' onClick={this.getDom.bind(this)}>获取dom的方案</div>
			<div id='dom1' ref='dom1Ref'>dom1</div>
			<div ref='dom2'>dom2</div>
		</div>
	}
}