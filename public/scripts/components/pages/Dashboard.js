import React from 'react';
import {Link} from 'react-router';

export default React.createClass({
	render: function() {
		return (
			<div className="dashboardDiv pageDiv">
				<a className="breadCrumbs crumbOne" href="/">Home</a>
				<h1>Dashboard Main</h1>
				<h2>Manage Listings</h2>
				<Link to="/dashboard/newlisting">New Listing</Link>
				<Link to="/dashboard/editlisting">Edit Listing</Link>
				<h2>Manage Rentals</h2>
				<Link to="/dashboard/newrental">New Rental</Link>
				<Link to="/dashboard/editrental">Edit Rental</Link>
			</div>
			);
	}
});