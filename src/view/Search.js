import React, { Component, PureComponent, } from 'react';

export default class Search extends Component {//PureComponent

	constructor(props) {//props,context
		super(props);
		this.state = {
			arr: [1,2,3,4]
		}
	}

	click(index){
		console.log(index);
		this.state.arr[index] = 'change';
		this.setState({
			arr:this.state.arr
		})
	}

	render() {
		return (
			<div>
				{this.state.arr.map((item,index)=>{
					return <div style={{border:'0.1rem solid #ff7777',margin:'0.5rem'}} key={index} onClick={this.click.bind(this,index)}>
						{item}
					</div>
				})}
			</div>
		);
	}
}