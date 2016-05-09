import React from 'react';
import {Link} from 'react-router';
import Agents from './../../collections/AgentCollection';
import AgentThumb from './../AgentThumb';

export default React.createClass({
	getInitialState: function() {
		return {Agents: Agents};
	},
	componentDidMount: function() {
		Agents.on('update', this.updateAgents);
		Agents.fetch({
			success: function() {
				console.log('agent success', arguments);
			},
			error: function() {
				console.log('agent error');
			}
		});
	},
	updateAgents: function() {
		this.setState({Agents: Agents});
	},
	render: function() {
		const agents = this.state.Agents.map((agent, i, array) => {
			return (
				<AgentThumb
					key={agent.get('id')}
					id={agent.get('id')}
					firstName={agent.get('firstName')}
					lastName={agent.get('lastName')}
					phone={agent.get('phone')}
					email={agent.get('email')}
					bio={agent.get('bio')}
					image={agent.get('image')} />
				);
		});
		return (
			<div className="listingPage pageDiv">
				<a className="breadCrumbs crumbOne" href="/">Home</a>
				<h1>Find an Agent</h1>
				{agents}
				<Link to="/findagent/details">Agent Details</Link>
				
			</div>
			);
	}
});




// export default React.createClass({
// 	getInitialState: function() {
// 		return {Listings: Listings};
// 	},
// 	componentDidMount: function() {
// 		Listings.on('update', this.updateListings);
// 		Listings.fetch({
// 			success: function() {
// 				console.log('listing success', arguments);
// 			}, error: function(){
// 				console.log('listing error');
// 			} });
// 	},
// 	updateListings: function() {
// 		this.setState({Listings: Listings});
// 	},
// 	render: function() {
// 		const listings = this.state.Listings.map((listing, i, array) => {
// 			return (
// 				<PropertyThumb
// 					key={listing.get('id')}
// 					id = {listing.get('id')}
// 					address={listing.get('address')}
// 					price={listing.get('price')}
// 					beds={listing.get('beds')}
// 					baths={listing.get('baths')}
// 					sqft={listing.get('sqft')}
// 					acres={listing.get('acres')}
// 					type={listing.get('type')}
// 					stories={listing.get('stories')}
// 					year={listing.get('year')}
// 					userId={listing.get('userId')}
// 					rentSale={listing.get('rentSale')} />
// 				);
// 		});
// 		return (
// 			<div>
// 				<a href="/">Home</a>
// 				<h1>Listings Main Page</h1>
// 				<SearchBar />
// 				{listings}
// 				<Link to="/forsale/details">Details Page</Link>
// 			</div>
// 			);
// 	}
// });