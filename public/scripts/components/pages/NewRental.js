import React from 'react';
import PropEntryForm from './../PropEntryForm';
import RentalModel from './../../models/RentalModel';
import listings from './../../collections/RentalCollection';

export default React.createClass({
	getInitialState: function() {
		return{listing: new RentalModel(),
			listings: listings
			};
	},
	componentDidMount: function() {
		listings.on('update', this.updateListings);
		this.state.listing.on('change', this.updateListings);
		listings.fetch();
	},
	updateListings: function() {
		this.setState({listings: listings});
	},
	render: function() {
		return (
			<div className="dashboardDiv pageDiv">
				<a className="breadCrumbs crumbOne" href="/">Home</a><i className="fa fa-angle-right"></i><a className="breadCrumbs" href="/dashboard">Dashboard</a>
				<h1>Create New Rental</h1>
				<PropEntryForm model={this.state.listings}
					formChange={this.formChange}
					formSubmit={this.formSubmit}
					clearForm={this.clearForm}
				 />
				<input type="filepicker" data-fp-apikey="AWEM8RWC9TUScrspS0Rdiz" onchange={this.picSubmit} />
			</div>
			);
	},
	picSubmit: function() {
		filepicker.pick(
			function(Blob){
			console.log(Blob.url);
			});
	},
	formChange: function(e) {
		e.preventDefault();
		this.state.listing.set(e.target.dataset.key, e.target.value);
		this.setState({
			listing: this.state.listing
		});
	},
	formSubmit: function(e) {
		e.preventDefault();
		this.state.listing.save({
			userId: window.user.id,
			success: this.clearForm
		});
	},
	clearForm: function() {
		this.state.listing.clear();
	}

});