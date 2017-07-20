import React, { Component } from 'react';
import Flexbox from 'flexbox-react';
import './css/page1.less';

class Page1a extends Component {
	render() {
		return (
			<Flexbox flexDirection="column" alignItems="center" className="Page1a simple from-right transition-item">
				<h2> This is page 1 child A </h2>
			</Flexbox>
		)
	}
}

export default Page1a;
