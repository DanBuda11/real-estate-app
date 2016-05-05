import React from 'react';

export default React.createClass({
	render: function() {
		return (
			<div>
				<a href="/">Home</a><i className="fa fa-angle-right"></i><a href="/dashboard">Dashboard</a>
				<h1>Edit Listing</h1>
				<h2>Input Form Goes Here</h2>
				<button>Clear Input</button>
				<button>Delete Listing</button>
				<button type="submit">Submit</button>
			</div>
			);
	}
});