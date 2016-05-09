import React from 'react';

export default React.createClass({
	render: function() {
		return (
			<div className="listingPage pageDiv">
				<a className="breadCrumbs crumbOne" href="/">Home</a><i className="fa fa-angle-right"></i><a className="breadCrumbs" href="/forsale">Listings</a><i className="fa fa-angle-right"></i><a className="breadCrumbs" href="/forsale/details">Details</a>
				<h1>Listing Photos Page</h1>
				
			</div>
			);
	}
});