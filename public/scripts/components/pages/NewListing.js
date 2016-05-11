import React from 'react';
import PropEntryForm from './../PropEntryForm';
import ListingModel from './../../models/ListingModel';
import filepicker from 'filepicker-js';
import listings from './../../collections/ListingCollection';
import Photo from './../../models/PhotoModel';
import photos from './../../collections/PhotoCollection';

export default React.createClass({
	getInitialState: function() {
		return {
			listing: new ListingModel(),
			listings: listings,
			url: '',
			photo: new Photo(),
			photos: photos
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
				<h1>Create New Listing</h1>
				<PropEntryForm model={this.state.listing}
					formChange={this.formChange}
					formSubmit={this.formSubmit}
					clearForm={this.clearForm}
					 />
				<button onClick ={this.picSubmit}>Choose Photos</button>
			</div>
			);
	},
	picSubmit: function() {
		filepicker.pickMultiple(
			{
			maxFiles: 10,
			conversions: ['crop', 'rotate'],
			cropRatio: 1,
			cropForce: true,
			mimetype: 'image/*'},
  			(Blob) => {
  			// console.log(Blob);
  			console.log('photo url in blob: ',Blob[0].url);
    		this.setState({photos: Blob});
  		});
	},
	formChange: function(e) {
		this.state.listing.set(e.target.dataset.key, e.target.value);
		this.setState({
			listing: this.state.listing
		});
	},
	formSubmit: function(e) {
		e.preventDefault();
		this.state.listing.save({userId: window.user.id}, {
			// need to grab newly created listingId
			success: this.savePhotos
		});
		console.log('formSubmit');
	},
	clearForm: function() {
		console.log('clearForm');
		this.state.listing.clear();
	},
	savePhotos: function() {
		console.log('savePhotos running');
		this.state.photos[0].save();
		// for (i=0; i< this.state.photos.length; i++) {
			//save each photo to the database using the listingId createed by submitting the new listing
		//where are the photos being saved to? server link?
	}
});

// <input type="filepicker" data-fp-apikey="AWEM8RWC9TUScrspS0Rdiz" onClick={this.picSubmit} />