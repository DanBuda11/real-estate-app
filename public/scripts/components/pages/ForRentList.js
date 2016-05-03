import React from 'react';
import {Link} from 'react-router';

export default React.createClass({
	render: function() {
		return (
			<div>
				<h1>Rentals Main Page</h1>
				<Link to="/forrent/details/">Details Page</Link>
				<p>Put breadcrumbs here</p>
			</div>
			);
	}
});