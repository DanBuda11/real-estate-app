import React from 'react';
import {Link} from 'react-router';
import RentalCollection from './../../collections/RentalCollection';

export default React.createClass({
	getInitialState: function() {
		let rentals = RentalCollection;
		return {
			rentals: rentals
		};
	},
	render: function() {
		return (
			<div>
				<a href="/">Home</a>
				<h1>Rentals Main Page</h1>
				<Link to="/forrent/details/">Details Page</Link>
				
			</div>
			);
	}
});