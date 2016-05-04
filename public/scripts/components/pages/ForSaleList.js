import React from 'react';
import {Link} from 'react-router';
import ListingCollection from './../../collections/ListingCollection';

export default React.createClass({
	getInitialState: function() {
		let listings = ListingCollection;
		return {
			listings: listings
		};
	},
	componentDidMount: function() {
		this.state.listings.fetch();
		console.log(this.state.listings);
	},
	render: function() {
		return (
			<div>
				<a href="/">Home</a>
				<h1>Listings Main Page</h1>
				<Link to="/forsale/details">Details Page</Link>
				
			</div>
			);
	}
});