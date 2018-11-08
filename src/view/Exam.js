import React, { Component, PureComponent, } from 'react';

import PageViewer from './component/PageViewer'

export default class Exam extends Component {//PureComponent

	constructor(props) {//props,context
		super(props);
	}

	render() {
		return (
				<div>
					<PageViewer />
				</div>
			)
	}

	// render() {
	// 	return (
	// 			<div>4</div>
	// 		)
	// }
}