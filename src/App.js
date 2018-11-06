import React, { Component, PureComponent} from 'react';
import { Link, withRouter, NavLink } from 'react-router-dom'

import './css/common.css';
import './css/home.css';

//纯组件
const List = (props) => {

	const cb = (msg) => {
		return () => {
			if(msg == 'clear'){
				msg = ''
			}
			props.callback(msg)
		}
	}

	return(
		<div style={{
			color:'#ff7777',border:'0.05rem solid green',
			width: '5rem',fontSize:'1rem',textAlign:'center',
			lineHeight:'1.5rem',
			borderRadius:'0.5rem',marginTop:'0.5rem'}} onClick={cb(props.name)}>{ props.name }</div>
	)
}

class App extends React.Component {//PureComponent

	constructor(props) {//props,context
		super(props);
		this.state = {
			name: '万少博',
			button:''
		}
	}

	callback(params){
		this.setState({
			button: params
		})
	}

	render() {
		return (
			<div>
				{/*头部*/}
				<div className={"head"}>
					<div className="name">{this.state.name}主页</div>
				</div>
				<ul className='item'>
					<li><Link to="sec01">key关键字测试入口</Link></li>
					<li><Link to="sec02">下拉框组件</Link></li>
					<li><Link to="sec03">获取手机硬件信息入口</Link></li>
					<li><Link to="sec04">翻页器</Link></li>
					<li><Link to="sec05">context通信入口</Link></li>
					<li><Link to="sec06">阻止冒泡</Link></li>
				</ul>
				{/**/}
				<div style={{border: '1px solid red'}}>
					<div style={{fontSize: '.6rem'}}>这个地方的文字可以被改变，请点击下面的按钮：<br/>你点击了{this.state.button}</div>
					{['button1','button2','button3','clear'].map((item,index)=>{
						return (
							<List
								key={index}
								name={item}
								callback={this.callback.bind(this)}
							/>
						)
					})}
				</div>
			</div>
		);
	}
}

//类的静态属性
App.defaultProps = {

}

export default App;
