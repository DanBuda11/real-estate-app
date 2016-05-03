import React from 'react';

export default React.createClass({
	render: function() {
		return (
			<div>
				<h1>Registration Page</h1>
				<h2>Input Form Goes Here</h2>
				<Link to="/dashboard">Go To Dashboard (Submit)</Link>
				<p>Put breadcrumbs here</p>
			</div>
			);
	}
});