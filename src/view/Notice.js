import React, { Component, PureComponent, } from 'react';

import Select from './component/Select'

let fruit = ['请选择水果','app','green','banana'];
let drink = ['请选择饮料','coole','druce','milk'];

export default class Notice extends Component {//PureComponent

	constructor(props) {//props,context
		super(props);
		this.state = {
			getFruit: '',
			getDrink:'',
			closeAll: false
		}
	}

	childToParent01(index){
		this.setState({
			getFruit: fruit[index]
		})
	}

	childToParent02(index){
		this.setState({
			getDrink: drink[index]
		})
	}

	closeSelect(e){
		// console.log('closeSelect')
		this.setState({
			closeAll: true
		})
	}

	render() {
		return (
			<div onClick={this.closeSelect.bind(this)}>
				<Select
					closeAll={false}
					initIndex={0}
					fruit={fruit}
					hasSelect = {this.childToParent01.bind(this)}
				/>
				<div>您选了：{this.state.getFruit}</div>
				<Select
					closeAll={false}
					initIndex={0}
					fruit={drink}
					hasSelect = {this.childToParent02.bind(this)}
				/>
				<div>您选了：{this.state.getDrink}</div>
			</div>
		);
	}
}