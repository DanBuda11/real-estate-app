import React from 'react';
import {Link} from 'react-router';

export default React.createClass({
	render: function() {
		return (
			<div>
				<a href="/">Home</a>
				<h1>Registration Page</h1>
				<h2>Input Form Goes Here</h2>
				<Link to="/dashboard">Go To Dashboard (Submit)</Link>
				
			</div>
			);
	}
});