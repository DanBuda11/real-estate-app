import React from 'react';
import {Link} from 'react-router';

export default React.createClass({
	render: function() {
		return (
			<div>
				<a href="/">Home</a><i class="fa fa-angle-right"></i><a href="/findagent">Agents</a>
				<h1>Agent Details Page</h1>
				<Link to="/findagent/details/listings">See Agent's Listings</Link>
			</div>
			);
	}
});