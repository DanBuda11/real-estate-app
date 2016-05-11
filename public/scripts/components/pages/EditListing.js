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
		// this.state.listing.on('change', this.updateListings);
		listings.fetch();
	},
	updateListings: function() {
		this.setState({listings: listings});
	},
	render: function() {
		const userListings = this.state.listings.filter((val, i, array) => {
			if(val.get('userId') === window.user.id) {
				return true;
			} else {
				return false;
			}
		}).map((val, i, array) => {
			return (
				<option
					label={val.get('address')}
					key={i}
					value={val.get('id')}
					rentSale={val.get('rentSale')}
					price={val.get('price')}
					beds={val.get('beds')}
					baths={val.get('baths')}
					sqft={val.get('sqft')}
					acres={val.get('acres')}
					type={val.get('type')}
					stories={val.get('stories')}
					year={val.get('year')}>
					{val.get('address')}
				</option>
				);
			});
		return (
			<div className="dashboardDiv pageDiv">
				<a className="breadCrumbs crumbOne" href="/">Home</a><i className="fa fa-angle-right"></i><a className="breadCrumbs" href="/dashboard">Dashboard</a>
				<h1>Edit Listing</h1>
				<select name="editdropdown" onChange={this.fillForm}>
									<option value="pick">Choose Listing to Edit</option>
									{userListings}
								</select>
				<PropEntryForm model={this.state.listing}
					formChange={this.formChange}
					formSubmit={this.formSubmit}
					clearForm={this.clearForm}
					deleteConfirm={this.deleteConfirm} />
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
	fillForm: function(e) {
		this.setState({
			listing: this.state.listings.get(e.target.value)
		});
	},
	formChange: function(e) {
		console.log('formChange', e.target.dataset.key, e.target.value);
		this.state.listing.set(e.target.dataset.key, e.target.value);
		this.setState({
			listing: this.state.listing
		});
	},
	formSubmit: function(e) {
		e.preventDefault();
		this.state.listing.save({userId: window.user.id}, {
			success: this.clearForm
		});
	},
	clearForm: function() {
		this.state.listing.clear();
	},
	deleteConfirm: function() {
		this.state.listing.destroy();

	},
	deleteHouse: function() {
		console.log('delete clicked');
		console.log(this.state.listing.id);

	}
});