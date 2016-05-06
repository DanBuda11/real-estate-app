import React from 'react';
import {Link} from 'react-router';
import Listings from './../../collections/ListingCollection';
import AgentCollection from './../../collections/AgentCollection';
import PropertyThumb from './../PropertyThumb.js';
import SearchBar from './../SearchBar.js';

export default React.createClass({
	getInitialState: function() {
		return {Listings: Listings};
	},
	componentDidMount: function() {
		Listings.on('update', this.updateListings);
		Listings.fetch({
			success: function() {
				console.log('listing success', arguments);
			}, error: function(){
				console.log('listing error');
			},
			data: {
				withRelated: ['user']
			}
		});
	},
	updateListings: function() {
		this.setState({Listings: Listings});
	},
	render: function() {
		const listings = this.state.Listings.map((listing, i, array) => {
			console.log(listing);
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
					firstName={listing.get('user').firstName} />
				);
		});
		return (
			<div>
				<a href="/">Home</a>
				<h1>Listings Main Page</h1>
				<SearchBar />
				{listings}
				<Link to="/forsale/details">Details Page</Link>
			</div>
			);
	}
});