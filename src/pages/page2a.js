import React, { Component } from 'react';
import Flexbox from 'flexbox-react';
import './css/page2.less';

class Page2a extends Component {
	render() {
		return (
			<Flexbox flexDirection="column" alignItems="center" className="Page2a simple from-right transition-item">
				<h2> This is page 2 child A </h2>
			</Flexbox>
		)
	}
}

export default Page2a;
