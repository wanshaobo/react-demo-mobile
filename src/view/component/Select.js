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
		// document.body.addEventListener('click',this._hideHandle.bind(this));
		document.querySelector('body').addEventListener('click',this._hideHandle.bind(this));
	}

	componentWillUnmount(){
		document.body.removeEventListener('click',this._hideHandle.bind(this));
	}

	_hideHandle(e){
		//todo 一个页面使用多个该组件时，页面销毁时，body只移除了一个事件，setState报错
		//TODO：Can't call setState (or forceUpdate) on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in the componentWillUnmount method.
		//todo 添加!this.state.displsyItem，仅仅是一种hack手法
		if(e.target.className == "_select" || e.target.className == "_selectItem" || !this.state.displsyItem)//e.target.className e.target.nodeName
			return
		this.setState({displsyItem: false})
	}

	//es6写法报错
	// _hideHandle = () => {
	// 	console.log('_hideHandle');
	// 	this.setState({
	// 		displsyItem: false
	// 	})
	// }

	displayItem(){
		this.setState({
			displsyItem: !this.state.displsyItem
		});
	}

	select(index){
		this.setState({
			displsyItem: false,
			selectIndex: index
		});
		this.props.hasSelect(index)
	}

	render() {
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
						top: (this.state.displsyItem) ? '0.11rem' : '0.6rem',
						borderColor: (this.state.displsyItem) ? 'transparent transparent red transparent' : 'red transparent transparent transparent',
						height:'0'
					}}
					     className="_select"
					     onClick={this.displayItem.bind(this)}
					></div>
				</div>
				{(this.state.displsyItem) ?
					<ul>{this.props.fruit.map((item,index)=>{
						if(index != 0){
							return <li
									key={index}
									className="_selectItem"
									style={{width:'10rem', height:'1.5rem',border:'0.05rem solid green'}}
									onClick={this.select.bind(this,index)}
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