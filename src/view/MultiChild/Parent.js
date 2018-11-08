import React, { Component, PureComponent, } from 'react';

import '../../css/common.css'

import Child01 from './Child01';
import Child02 from './Child02';
import Child03 from './Child03';

export default class Parent extends Component {//PureComponent

	constructor(props) {//props,context
		super(props);
		this.state = {
			value: 'this is value',
			film:{
				video:{
					time: 123,
					volume: 'high',
					info:{
						definition: 1,
						user: [1,2,3,4,5]
					}
				},
				audio:{
					time: 456,
					volume: 'low',
					info: {
						definition: 2,
						user: [6,7,8,9,10]
					}
				}
			}
		}
	}

	changeData(){
		this.state.film.video.info.user[0] = 5;
		this.state.film.video.time = 323;
		this.setState({
			film: this.state.film,
			value: 'value has change'
		},()=>{console.log(this.state.film)});
	}

	//父元素调用子元素方法
	fireChild02(){
		console.log(this.refs.child02.fireFromSuper());
	}

	render() {
		console.log('Parent')
		return (
			<div>
				<div>Parent</div>
				<div className='btn' onClick={()=>{this.changeData()}}>change data</div>
				<Child01 video={this.state.film.video} value={this.state.value}/>
				<Child02 ref='child02' video={this.state.film.video}/>
				<Child03 film={this.state.film}/>

				<div className="btn" onClick={this.fireChild02.bind(this)}>点击按钮，父元素调用子元素02的方法</div>
			</div>
		);
	}
}