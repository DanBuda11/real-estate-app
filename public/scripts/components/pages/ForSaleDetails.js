import React from 'react';
import Listing from './../../models/ListingModel';

export default React.createClass({
	getInitialState: function() {
		let listing = new Listing({id: this.props.params.listingId,
			user: {}});
		return {listing: listing};
	},
	componentDidMount: function() {
		this.state.listing.on('change', this.update);
		this.state.listing.fetch();
	},
	render: function() {
		return (
			<div className="listingPage pageDiv">
				<a className="breadCrumbs crumbOne" href="/">Home</a><i className="fa fa-angle-right"></i><a className="breadCrumbs" href="/forsale">Listings</a>
				<h1>Details for {this.state.listing.get('address')}</h1>
				<div className="detailsPhoto">
					<img src="http://www.fillmurray.com/200/200"/>
				</div>
				<div className="morePhotos">
					<a href={`/forsale/${this.state.listing.get('id')}/details/photos`}>View All Photos</a>
				</div>
				<div className="propDetailsBlock">
					<ul>
						<li>{this.state.listing.get('rentSale')}</li>
						<li>${this.state.listing.get('price')}</li>
						<li>{this.state.listing.get('beds')} Bedrooms</li>
						<li>{this.state.listing.get('baths')} Bathrooms</li>
						<li>{this.state.listing.get('sqft')} Square Feet</li>
						<li>{this.state.listing.get('acres')} Acres</li>
						<li>{this.state.listing.get('type')}</li>
						<li>{this.state.listing.get('stories')} Story</li>
						<li>Built in {this.state.listing.get('year')}</li>
						<li>Offered By: {this.state.listing.get('user').firstName} {this.state.listing.get('user').lastName}</li>
						<li>Phone: {this.state.listing.get('user').phone} Email: {this.state.listing.get('user').email}</li>
					</ul>
				</div>
			</div>
			);
	},
	update: function(listing) {
		this.setState({listing: listing});
	}
});