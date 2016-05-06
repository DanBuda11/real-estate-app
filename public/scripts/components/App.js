import React from 'react';
import Header from './Header';
import Footer from './Footer'; 
import User from './../models/UserModel';

export default React.createClass({
	componentWillMount: function() {

	},
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