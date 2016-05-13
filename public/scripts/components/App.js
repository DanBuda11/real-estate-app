import React from 'react';
import Header from './Header';
import Footer from './Footer'; 

export default React.createClass({
	render: function() {
		return (
			<main>
				<Header />
				{this.props.children}
				<Footer />
			</main>
		);
	}
});