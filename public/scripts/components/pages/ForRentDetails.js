import React from 'react';
import {Link} from 'react-router';

export default React.createClass({
	render: function() {
		return (
			<div>
				<h1>Rental Details Page</h1>
				<Link to="/forrent/details/photos">Photos Page</Link>
				<p>Put breadcrumbs here</p>
			</div>
			);
	}
});