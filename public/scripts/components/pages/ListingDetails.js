import React from 'react';
import Listing from './../../models/ListingModel';

export default React.createClass({
	getInitialState: function() {
		let listing = new Listing({id: this.props.params.listingId,
			user: {},
			photos: []
			});
		return {listing: listing};
	},
	componentDidMount: function() {
		this.state.listing.on('change', this.update);
		this.state.listing.fetch({
			data: {
				withRelated: ['user', 'photos']
			}
		});
	},
	componentWillUnmount: function() {
		this.state.listing.off('change');
	},
	render: function() {
		console.log(this.state.listing.get('photos'));
		return (
			<div className="listingPage pageDiv">
				<a className="breadCrumbs crumbOne" href="/">Home</a><i className="fa fa-angle-right"></i><a className="breadCrumbs" href="/listings">Listings</a>
				<h2>Details for {this.state.listing.get('address')}</h2>
				<div className="detailsPhotoBox">
					{this.state.listing.get('photos')[0] ? (<img  className="detailsPhoto" src={this.state.listing.get('photos')[0].url} />) : (<img  className="detailsPhoto" src='./../../images/no_image_avail.png' />)}
				</div>
				<div className="morePhotos">
					{this.state.listing.get('photos')[0] ? <a href={`/listings/${this.state.listing.get('id')}/details/photos`}>View All Photos</a> : ''}
					
				</div>
				<div className="propDetailsBlock">
					<ul className="detailsList">
						<li>{this.state.listing.get('rentSale')}</li>
						<li>${this.state.listing.get('price')}</li>
						<li>{this.state.listing.get('beds')} Bedrooms</li>
						<li>{this.state.listing.get('baths')} Bathrooms</li>
						<li>{this.state.listing.get('sqft')} Square Feet</li>
						<li>{this.state.listing.get('acres')} Acres</li>
						<li>{this.state.listing.get('type')}</li>
						<li>{this.state.listing.get('stories')} Story</li>
						<li>Built in {this.state.listing.get('year')}</li>
						<li>{this.state.listing.get('blurb')}</li>
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