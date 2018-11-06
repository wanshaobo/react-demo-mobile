import React, { Component, PureComponent, } from 'react';

import '../css/common.css';

export default class StopBubble extends Component {//PureComponent

	constructor(props) {//props,context
		super(props);
	}

	componentDidMount(){
		document.getElementById('parent2').addEventListener('click',(e)=>{this.parentCallback2(e)})
		document.getElementById('child3').addEventListener('click',(e)=>{this.childCallback3(e)})
		document.getElementById('parent4').addEventListener('click',this.parentCallback4.bind(this))
		document.getElementById('child4').addEventListener('click',(e)=>{this.childCallback4(e)})
	}

	componentWillUnmount(){
		document.getElementById('parent2').removeEventListener('click',(e)=>{this.parentCallback2(e)})
		document.getElementById('child3').removeEventListener('click',(e)=>{this.childCallback3(e)})
		document.getElementById('parent4').removeEventListener('click',this.parentCallback4.bind(this))
		document.getElementById('child4').removeEventListener('click',(e)=>{this.childCallback4(e)})
	}

	//子元素合成事件向父元素合成事件冒泡
	parentCallback1(){
		console.log('parent1 click');
	}
	childCallback1(e){
		e.stopPropagation();
		console.log('child1 click');
	}

	//子元素合成事件向父元素原生事件冒泡
	parentCallback2(e){
		if(e.target.id == 'child2'){
			return
		}
		console.log('parent2 click');
	}
	childCallback2(){
		console.log('child2 click');
	}

	//子元素原生事件向父元素合成事件冒泡
	parentCallback3(){
		console.log('parent3 click');
	}
	childCallback3(e){
		e.stopPropagation();
		console.log('child3 click');
	}

	//子元素原生事件向父元素原生事件冒泡
	parentCallback4(){
		console.log('parent4 click');
	}
	childCallback4(e){
		e.stopPropagation();//
		console.log('child4 click');
	}

	render() {
		return (
			<div>
				<div className='fs1'>子元素合成事件向父元素合成事件冒泡</div>
				<div className='parent1' onClick={(e) => {this.parentCallback1(e)}} style={{background:'#ff6788',padding: '1rem'}}>
					<div className='child1' onClick={(e) => {this.childCallback1(e)}} style={{background:'red'}}>1</div>
				</div>
				<div className='fs1'>子元素合成事件向父元素原生事件冒泡</div>
				<div ref='parent2' id='parent2' className='parent2' style={{background:'#ff6788',padding: '1rem'}}>
					<div ref='child2' id='child2' className='child2' onClick={this.childCallback2.bind(this)} style={{background:'red'}}>1</div>
				</div>
				<div className='fs1'>子元素原生事件向父元素合成事件冒泡</div>
				<div id='parent3' className='parent3' onClick={(e) => {this.parentCallback3(e)}} style={{background:'#ff6788',padding: '1rem'}}>
					<div id='child3' className='child3' style={{background:'red'}}>1</div>
				</div>
				<div className='fs1'>子元素原生事件向父元素原生事件冒泡</div>
				<div id='parent4' className='parent4' style={{background:'#ff6788',padding: '1rem'}}>
					<div id='child4' className='child4' style={{background:'red'}}>1</div>
				</div>
				<div className='fs1'>总结：</div>
				<div className='fs1'>在子元素上使用e.stopPropagation()的情况：<br/>合成→合成 | 原生→原生 | 原生→合成</div>
				<div className='fs1'>在父元素上做拦截：合成→原生</div>
			</div>
		);
	}
}