import React from 'react';
import Agents from './../../collections/UserCollection';
import AgentThumb from './../AgentThumb';

export default React.createClass({
	getInitialState: function() {
		return {Agents: Agents};
	},
	componentDidMount: function() {
		Agents.on('update', this.updateAgents);
		Agents.fetch();
	},
	componentWillUnmount: function() {
		Agents.off('update');
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
					photo={agent.get('photo')} />
				);
		});
		return (
			<div className="listingPage pageDiv">
				<a className="breadCrumbs crumbOne" href="/">Home</a>
				<h1>Find an Agent</h1>
				{agents}
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