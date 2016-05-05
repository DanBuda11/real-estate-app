import React from 'react';
import {Link} from 'react-router';

export default React.createClass({
	render: function() {
		return (
			<div>
				<a href="/">Home</a><i className="fa fa-angle-right"></i><a href="/forrent">Rentals</a>
				<h1>Rental Details Page</h1>
				<Link to="/forrent/details/photos">Photos Page</Link>
				
			</div>
			);
	}
});