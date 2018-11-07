import React, { Component, PureComponent  } from 'react';
const PropTypes = require('prop-types');

import '../../css/common.css';

//有状态组件context的写法
class Child extends React.Component {
	render() {
		return (
			<div>{this.context.text}</div>
		);
	}
}
//定义contextTypes
Child.contextTypes = {
	text: PropTypes.string
};

//无状态组件context的写法
const Child01 = ({children}, context) => <div>{context.text}</div>;
Child01.contextTypes = {text: PropTypes.string};

//context提供者
export default class Context extends Component {//PureComponent

	constructor(props, context) {//props,context
		super(props);
	}

	componentWillReceiveProps(nextProps, nextContext){

	}

	shouldComponentUpdate(nextProps, nextState, nextContext){

	}

	componentWillUpdate(nextProps, nextState, nextContext){

	}

	componentDidUpdate(prevProps, prevState, prevContext){

	}

	getChildContext() {
		return {text: "从context提供者向使用者传递"};
	}

	render() {
		//console.log(this.props);//{history:{},location:{},match:{},staticContext:''}
		return (
			<div>
				<div className='fs1'>
					context提供者中添加childContextTypes和getChildContext，React会向下自动传递参数，任何组件只要在它的子组件中（这个例子中是Button），就能通过定义contextTypes来获取参数。
				</div>
				<Child />
				<Child01 />
			</div>
		);
	}
}
Context.childContextTypes = {
	text: PropTypes.string
};