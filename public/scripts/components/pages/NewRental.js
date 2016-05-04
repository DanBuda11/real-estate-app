import React from 'react';

export default React.createClass({
	render: function() {
		return (
			<div>
				<a href="/">Home</a><i class="fa fa-angle-right"></i><a href="/dashboard">Dashboard</a>
				<h1>Create New Rental</h1>
				<h2>Input Form Goes Here</h2>
				<button>Clear Input</button>
				<button type="submit">Submit</button>
				
			</div>
			);
	}
});