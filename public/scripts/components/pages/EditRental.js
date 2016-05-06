import React from 'react';
import PropEntryForm from './../PropEntryForm';

export default React.createClass({
	render: function() {
		return (
			<div>
				<a href="/">Home</a><i className="fa fa-angle-right"></i><a href="/dashboard">Dashboard</a>
				<h1>Edit Rental</h1>
				<PropEntryForm />
			</div>
			);
	}
});