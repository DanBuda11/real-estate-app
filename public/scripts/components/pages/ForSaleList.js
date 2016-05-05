import React from 'react';
import {Link} from 'react-router';
import Listings from './../../collections/ListingCollection';
import PropertyThumb from './../PropertyThumb.js';

export default React.createClass({
	getInitialState: function() {
		return {Listings: Listings};
	},
	componentDidMount: function() {
		Listings.on('update', this.updateListings);
		Listings.fetch();
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
					year={listing.get('year')} />
				);
		});
		return (
			<div>
				<a href="/">Home</a>
				<h1>Listings Main Page</h1>
				{listings}
				<Link to="/forsale/details">Details Page</Link>
				
			</div>
			);
	}
});