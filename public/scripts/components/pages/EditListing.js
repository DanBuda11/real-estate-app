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
		// console.log('this.state.listings: ', this.state.listings);
		// console.log('this.state.listings: ',this.state.listings);
		// console.log('this.state.listings.');
		// listings.on('update', () => {
		// 	this.setState({listings: listings});
		// 	console.log('listings set state: ', listings);
		// });
		// listings.fetch();
		// console.log('listings fetch: ', listings.);
	},
	updateListings: function() {
		this.setState({listings: listings});
		// console.log('newest one: ', this.state.listings);
	},
	render: function() {
		// console.log(this.state.listings);
		console.log('user: ', window.user.id);
		const userListings = this.state.listings.filter((val, i, array) => {
			if(val.get('userId') === window.user.id) {
				return true;
			} else {
				return false;
			}
		// console.log('userListings: ', userListings);
			// if (val.get('userId') === window.user.id){
			// // if (listing.get('userId') === window.user.id) {
			// 	return true;
			// } else {
			// 	return false;
			// }
		}).map((val, i, array) => {
			return (
				<option value={val.get('address')} key={i}>{val.get('address')}</option>
				);
			});
		console.log('userListings: ', userListings);
		return (
			<div className="dashboardDiv pageDiv">
				<a className="breadCrumbs crumbOne" href="/">Home</a><i className="fa fa-angle-right"></i><a className="breadCrumbs" href="/dashboard">Dashboard</a>
				<h1>Edit Listing</h1>
				<select name="editdropdown" onChange={this.fillForm}>
									<option value="pick">Choose Listing to Edit</option>
									{userListings}
								</select>
				<PropEntryForm model={this.state.listing} />
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
	fillForm: function() {
		
	}
});