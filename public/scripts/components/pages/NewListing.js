import React from 'react';
import PropEntryForm from './../PropEntryForm';
import ListingModel from './../../models/ListingModel';
import filepicker from 'filepicker-js';
import listings from './../../collections/ListingCollection';
import Photo from './../../models/PhotoModel';
import photos from './../../collections/PhotoCollection';

export default React.createClass({
	getInitialState() {
		return {
			listing: new ListingModel(),
			listings: listings,
			url: '',
			photo: new Photo(),
			photos: []
		};
	},
	componentDidMount() {
		listings.on('update', this.updateListings);
		this.state.listing.on('change', this.updateListings);
		listings.fetch();
	},
	componentWillUnmount() {
		listings.off('update');
		this.state.listing.off('change');
	},
	updateListings: function() {
		this.setState({listings: listings});
	},
	render() {
		return (
			<div className="dashboardDiv pageDiv" id="content">
				<a className="breadCrumbs crumbOne" href="/">Home</a><i className="fa fa-angle-right"></i><a className="breadCrumbs" href="/dashboard">Dashboard</a>
				<h2>New Listing</h2>
				<PropEntryForm model={this.state.listing}
					formChange={this.formChange}
					formSubmit={this.formSubmit}
					clearForm={this.clearForm}
					picSubmit={this.picSubmit}
					 />
			</div>
			);
	},
	picSubmit() {
		filepicker.pickMultiple(
			{
			maxFiles: 10,
			conversions: ['crop', 'rotate'],
			cropRatio: 1,
			cropForce: true,
			mimetype: 'image/*'},
  			(Blob) => {
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
			success: function() {
				this.savePhotos;
				this.setState({photos: []});
			}
		});
		this.clearForm();
	},
	clearForm() {
		this.state.listing.clear();
	},
	savePhotos: function(listing) {
		let photoModels = this.state.photos.map((photo, i , array) => {
			return {url: photo.url, listingId:listing.id}; 
		});
		photoModels.forEach((photo, i, array)=> {
			photos.create(photo);
		});
	}
});