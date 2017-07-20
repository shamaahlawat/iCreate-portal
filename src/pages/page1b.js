import React, { Component } from 'react';
import Flexbox from 'flexbox-react';
import './css/page1.less';

class Page1b extends Component {
	render() {
		return (
			<Flexbox flexDirection="column" alignItems="center" className="Page1b simple from-right transition-item">
				<h2> This is page 1 child B </h2>
			</Flexbox>
		)
	}
}

export default Page1b;
