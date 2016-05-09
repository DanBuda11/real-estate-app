import React from 'react';
import {Link} from 'react-router';

export default React.createClass({
	render: function() {
		return (
			<div className="listingPage pageDiv">
				<a className="breadCrumbs crumbOne" href="/">Home</a><i className="fa fa-angle-right"></i><a className="breadCrumbs" href="/findagent">Agents</a>
				<h1>Agent Details Page</h1>
				<Link to="/findagent/details/listings">See Agent's Listings</Link>
			</div>
			);
	}
});