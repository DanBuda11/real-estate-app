import React from 'react';
import Listings from './../../collections/ListingCollection';
import PropertyThumb from './../PropertyThumbSale.js';
import SearchBar from './../SearchBar.js';

export default React.createClass({
	getInitialState: function() {
		return {Listings: Listings};
	},
	componentDidMount: function() {
		Listings.on('update', this.updateListings);
		Listings.fetch({
			data: {
				withRelated: ['user', 'images']
			}
		});
	},
	updateListings: function() {
		this.setState({Listings: Listings});
	},
	render: function() {
		const listings = this.state.Listings.map((listing, i, array) => {
						console.log(listing.get('images'));

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
				images={listing.get('images')}
				 />
				
			);
		});
		return (
			<div className="listingPage pageDiv">
				<a className="breadCrumbs crumbOne" href="/">Home</a>
				<h1>Listings Main Page</h1>
				<SearchBar />
				{listings}
			</div>
			);
	}
});