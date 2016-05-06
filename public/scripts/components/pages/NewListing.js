import React from 'react';
import PropEntryForm from './../PropEntryForm';
import ListingModel from './../../models/ListingModel';

export default React.createClass({
	getInitialState: function() {
		return {listing: new ListingModel()};
	},
	render: function() {
		return (
			<div>
				<a href="/">Home</a><i className="fa fa-angle-right"></i><a href="/dashboard">Dashboard</a>
				<h1>Create New Listing</h1>
				<PropEntryForm model={this.state.listing} />
			</div>
			);
	}
});