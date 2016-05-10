import React from 'react';
import Listing from './../../models/ListingModel';

export default React.createClass({
	getInitialState: function() {
		let listing = new Listing({
			id: this.props.params.listingId,
			user: {}
		});
		return {listing: listing};
	},
	componentDidMount: function() {
		this.state.listing.on('change', this.update);
		this.state.listing.fetch();
	},
	render: function() {
		return (
			<div className="listingPage pageDiv">
				<a className="breadCrumbs crumbOne" href="/">Home</a><i className="fa fa-angle-right"></i><a className="breadCrumbs" href="/forrent">Rentals</a><i className="fa fa-angle-right"></i><a className="breadCrumbs" href={`/forrent/${this.state.listing.get('id')}/details`}>Details</a>
				<h1>Photos for {this.state.listing.get('address')}</h1>
			</div>
			);
	},
	update: function(listing) {
		this.setState({listing: listing});
	}
});