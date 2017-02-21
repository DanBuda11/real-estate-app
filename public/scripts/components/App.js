import React from 'react';
import Header from './Header';
import Footer from './Footer'; 

export default React.createClass({
	render() {
		return (
			<main id="wrapper">
				<Header id="header"/>
				{this.props.children}
				<Footer id="footer"/>
			</main>
		);
	}
});