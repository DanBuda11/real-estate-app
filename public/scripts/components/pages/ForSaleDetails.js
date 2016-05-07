import React from 'react';
import {Link} from 'react-router';
import Listing from './../../models/ListingModel';

export default React.createClass({
	getInitialState: function() {
		let listing = new Listing({id: this.props.params.listingId});
		return {listing: listing};
	},
	componentDidMount: function() {
		this.state.listing.on('change', this.update);
		this.state.listing.fetch(
			
			
		);

	},
	render: function() {
		console.log(this.state.listing);
		return (
			<div>
				<a href="/">Home</a><i className="fa fa-angle-right"></i><a href="/forsale">Listings</a>
				<h1>Listings Details Page</h1>
				<div className="propDetailsBlock">
					<ul>
						<li>{this.state.listing.get('address')}</li>
						<li>{this.state.listing.get('rentSale')}</li>
						<li>${this.state.listing.get('price')}</li>
						<li>Posted By: {this.state.listing.get('user').firstName} {this.state.listing.get('user').lastName}</li>
					</ul>
				</div>
				<Link to="/forsale/details/photos">Photos Page</Link>
				
			</div>
			);
	},
	update: function(listing) {
		this.setState({listing: listing});
	}
});