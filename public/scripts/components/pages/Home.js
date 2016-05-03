import React from 'react';
import {Link} from 'react-router';

export default React.createClass({
	render: function() {
		return (
			<div>
				<h1>Home Page</h1>
				<Link to="/forsale">Find a Home for Sale</Link>
				<Link to="/forrent">Find a Home for Rent</Link>
				<Link to="/register">Register for an Agent Account</Link>
				<a src="#">Login</a>
			</div>
			);
	}
});