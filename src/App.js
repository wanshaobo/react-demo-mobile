import React, { Component, PureComponent} from 'react';
import { Link, withRouter, NavLink } from 'react-router-dom'

import './css/common.css';
import './css/home.css';

class App extends React.Component {//PureComponent

	constructor(props) {//props,context
		super(props);
	}
	render() {
		return (
			<div>
				{/*头部*/}
				<div className={"head"}>
					<div className="name">万少博主页</div>
					<div>
						<Link to="search"><img className="search" src={require('./img/home/search.png')} /></Link>
						<Link to="notice"><img className="message" src={require('./img/home/search.png')} /></Link>
					</div>
				</div>
				{/*两个标签卡片*/}
				<div className="fdr section2">
					<div className="item-left item fdr">
						<Link to="course">
							<img src={require('./img/home/search.png')} />
							<div className='dib content'>
								<div className='type'>视频</div>
								<div className='number'>12</div>
							</div>
						</Link>
					</div>
					<div className="item-right item fdr">
						<Link to="exam">
							<img src={require('./img/home/search.png')} />
							<div className='dib content'>
								<div className='type'>音频</div>
								<div className='number'>5</div>
							</div>
						</Link>
					</div>
				</div>
				{/**/}
				<div className='section3'>
					<div className='fdr'>
						<div style={{fontSize: 0}}>
							<img src={require('./img/home/search.png')} />
							<div style={{width: "2rem",height: "2rem", background: "#ff6700"}}></div>
						</div>
						<div>2</div>
					</div>
				</div>

			</div>
		);
	}
}

//类的静态属性
App.defaultProps = {

}

export default App;
