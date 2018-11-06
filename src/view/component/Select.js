import React, { Component, PureComponent, } from 'react';

export default class Select extends Component {//PureComponent

	constructor(props) {//props,context
		super(props);
		this.state = {
			displsyItem: false,
			selectIndex: null
		}
	}

	componentDidMount() {
		// debugger
		document.body.addEventListener('click',e => {this._hideHandle(e)});//一个页面多个元素绑定多个时间？

		// 不要将合成事件与原生事件混用 两个原生事件可以用e.stopPropagation();组织冒泡，但用className选择器的结果是，同一个页面多个子元素同事响应了
		// document.querySelector('._select').addEventListener('click', e => {
		// 	e.stopPropagation();
		// 	this.setState({
		// 		displsyItem: !this.state.displsyItem
		// 	});
		// })
	}
	//react的合成事件都是通过绑定在document上click的事件代理实现的，所以无法通过阻止合成事件冒泡(已将冒到document上了）来阻止docuemnt上的其他事件处理，所以得用原生事件
	conmponentWillUnmolut(){
		document.body.removeEventListener('click',()=>{this._hideHandle})
	}

	_hideHandle(e){
		if(e.target.className == "_select" || e.target.className == "_selectItem")//e.target.className e.target.nodeName
			return
		this.setState({
			displsyItem: false
		})
	}

	//es6写法报错
	// _hideHandle = () => {
	// 	console.log('_hideHandle');
	// 	this.setState({
	// 		displsyItem: false
	// 	})
	// }

	displayItem(e){//e.target.nodeName
		//http://www.cnblogs.com/lp-1763501916/p/7093788.html
		this.setState({
			displsyItem: !this.state.displsyItem
		});
	}

	select(e,index){
		this.setState({
			displsyItem: false,
			selectIndex: index
		});
		this.props.hasSelect(index)
	}

	render() {
		// console.log(this.props);
		return (
			<div>
				<div style={Style.block}>
					<div>{this.props.fruit[this.state.selectIndex ? this.state.selectIndex : this.props.initIndex]}</div>
					<div style={{
						position:'absolute',
						right:'0.2rem',
						borderStyle:'solid',
						borderWidth:'0.4rem',
						width:'0',
						top: (this.state.displsyItem && !this.props.closeAll) ? '0.11rem' : '0.6rem',
						borderColor: (this.state.displsyItem && !this.props.closeAll) ? 'transparent transparent red transparent' : 'red transparent transparent transparent',
						height:'0'
					}}
					     className="_select"
					     onClick={e => {this.displayItem(e)}}
					></div>
				</div>
				{(this.state.displsyItem && !this.props.closeAll) ?
					<ul>{this.props.fruit.map((item,index)=>{
						if(index != 0){
							return <li
									key={index}
									className="_selectItem"
									style={{width:'10rem', height:'1.5rem',border:'0.05rem solid green'}}
									onClick={e => {this.select(e,index)}}
								>{item}</li>
						}
					})}
					</ul> : null}
			</div>
		);
	}
}

const Style = {
	block:{
		position:'relative',
		width:'10rem',
		height:'1.5rem',
		border:'0.05rem solid red'
	}
}