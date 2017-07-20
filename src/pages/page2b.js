import React, { Component } from 'react';
import Flexbox from 'flexbox-react';
import './css/page2.less';

class Page2b extends Component {
	render() {
		return (
			<Flexbox flexDirection="column" alignItems="center" className="Page2b simple from-right transition-item">
				<h2> This is page 2 child B </h2>
			</Flexbox>
		)
	}
}

export default Page2b;
