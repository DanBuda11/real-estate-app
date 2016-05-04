import React from 'react';
import {Link} from 'react-router';

export default React.createClass({
	render: function() {
		return (
			<div>
				<a href="/">Home</a><i class="fa fa-angle-right"></i><a href="/forsale">Listings</a>
				<h1>Listings Details Page</h1>
				<Link to="/forsale/details/photos">Photos Page</Link>
				
			</div>
			);
	}
});