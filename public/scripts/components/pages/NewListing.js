import React from 'react';
import PropEntryForm from './../PropEntryForm';
import ListingModel from './../../models/ListingModel';
import listings from './../../collections/ListingCollection';

export default React.createClass({
	getInitialState: function() {
		return {
			listing: new ListingModel(),
			listings: listings
		};
	},
	componentDidMount: function() {
		listings.on('update', this.updateListings);
		listings.fetch();
	},
	updateListings: function() {
		this.setState({listings: listings});
	},
	render: function() {
		return (
			<div className="dashboardDiv pageDiv">
				<a className="breadCrumbs crumbOne" href="/">Home</a><i className="fa fa-angle-right"></i><a className="breadCrumbs" href="/dashboard">Dashboard</a>
				<h1>Create New Listing</h1>
				<PropEntryForm model={this.state.listing}
					formChange={this.formChange}
					
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
		this.state.listing.set(e.target.placeholder.toLowerCase(), e.target.value);
		this.setState({
			listing: this.state.listing
		});
	}
});