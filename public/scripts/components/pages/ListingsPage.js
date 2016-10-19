import React from 'react';
import Listings from './../../collections/ListingCollection';
import PropertyThumb from './../PropertyThumb.js';

export default React.createClass({
	getInitialState: function() {
		return {Listings: Listings};
	},
	componentDidMount: function() {
		Listings.on('update', this.updateListings);
		Listings.fetch({
			data: {
				withRelated: ['user', 'photos']
			}
		});
	},
	componentWillUnmount: function() {
		Listings.off('update');
	},
	updateListings: function() {
		this.setState({Listings: Listings});
	},
	render: function() {
		const listings = this.state.Listings.map((listing, i, array) => {
		return (
			<PropertyThumb
				key={listing.get('id')}
				id = {listing.get('id')}
				address={listing.get('address')}
				price={listing.get('price')}
				beds={listing.get('beds')}
				baths={listing.get('baths')}
				sqft={listing.get('sqft')}
				acres={listing.get('acres')}
				type={listing.get('type')}
				stories={listing.get('stories')}
				year={listing.get('year')}
				userId={listing.get('userId')}
				rentSale={listing.get('rentSale')}
				firstName={listing.get('user').firstName}
				lastName={listing.get('user').lastName}
				photos={listing.get('photos')}
				 />
				);
		});
		return (
			<div className="listingPage pageDiv" id="content">
				<a className="breadCrumbs crumbOne" href="/">Home</a>
				<h2>Home Listings</h2>
				<div className="filterButtons">
					<input type="button" className="filterButton" onClick={this.showRent} value="For Rent"></input>
					<input type="button" className="filterButton" onClick={this.showSale} value="For Sale"></input>
					<input type="button" className="filterButton" onClick={this.showAll} value="Show All"></input>
				</div>
				<div className="grid">
				{listings}
				</div>
			</div>
			);
	},
	showRent: function() {
		let rentListings = this.state.Listings.filter((listing, i , array) => {
			if (listing.get('rentSale') === 'For Rent') {
				return true;
			} else {
				return false;
			}		
		});
		this.setState({
			Listings: rentListings
		});
	},
	showSale: function() {
		let saleListings = this.state.Listings.filter((listing, i , array) => {
			if (listing.get('rentSale') === 'For Sale') {
				return true;
			} else {
				return false;
			}		
		});
		this.setState({
			Listings: saleListings
		});
	},
	showAll: function() {
		Listings.fetch();
	}
});