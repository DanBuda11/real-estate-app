import React from 'react';
import {Link} from 'react-router';
import Listings from './../../collections/ListingCollection';
import Agents from './../../collections/AgentCollection';
import PropertyThumb from './../PropertyThumb.js';
import SearchBar from './../SearchBar.js';

export default React.createClass({
	getInitialState: function() {
		return {Listings: Listings,
				Agents: Agents};
	},
	componentDidMount: function() {
		Listings.on('update', this.updateListings);
		Listings.fetch();
		Agents.on('update', this.updateAgents);
		Agents.fetch();
	},
	updateListings: function() {
		this.setState({Listings: Listings});
	},
	updateAgents: function() {
		this.setState({Agents: Agents});
	},
	render: function() {
		const agents = Agents;
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
					agent={agents[listing.get('userId')].firstName}
					userId={listing.get('userId')}
					rentSale={listing.get('rentSale')} />
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