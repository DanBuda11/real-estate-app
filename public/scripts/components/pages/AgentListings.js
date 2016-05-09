import React from 'react';

export default React.createClass({
	render: function() {
		return (
			<div className="listingPage pageDiv">
				<a className="breadCrumbs crumbOne" href="/">Home</a><i className="fa fa-angle-right"></i><a className="breadCrumbs" href="/findagent">Agents</a><i className="fa fa-angle-right"></i><a className="breadCrumbs" href="/findagent">Agent Details</a>
				<h1>Agent Listings Page</h1>
			</div>
			);
	}
});