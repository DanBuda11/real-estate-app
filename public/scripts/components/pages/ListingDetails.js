import React from 'react';
import Listing from './../../models/ListingModel';

export default React.createClass({
	getInitialState() {
		let listing = new Listing({id: this.props.params.listingId,
			user: {},
			photos: []
			});
		return {listing: listing};
	},
	componentDidMount() {
		this.state.listing.on('change', this.update);
		this.state.listing.fetch({
			data: {
				withRelated: ['user', 'photos']
			}
		});
	},
	componentWillUnmount() {
		this.state.listing.off('change');
	},
	render() {
		return (
			<div className="listingPage pageDiv" id="content">
				<a className="breadCrumbs crumbOne" href="/">Home</a><i className="fa fa-angle-right"></i><a className="breadCrumbs" href="/listings">Listings</a>
				<h2>{this.state.listing.get('address')}</h2>
				<div className="detailsPhotoBox">
					{this.state.listing.get('photos')[0] ? (<img  className="detailsPhoto" src={this.state.listing.get('photos')[0].url} />) : (<img  className="detailsPhoto" src='./../../images/no_image_avail.png' />)}
				</div>
				<div className="morePhotos">
					{this.state.listing.get('photos')[0] ? <a className="morePhotosLink" href={`/listings/${this.state.listing.get('id')}/details/photos`}>View All Photos</a> : ''}
					
				</div>
				<div className="propDetailsBlock">
					<ul className="detailsList">
						<li>{this.state.listing.get('rentSale')} for ${this.state.listing.get('price')}</li>
						<li>{this.state.listing.get('stories')} Story {this.state.listing.get('type')} with {this.state.listing.get('beds')} Bedrooms and {this.state.listing.get('baths')} Bathrooms</li>
						
						<li>Total of {this.state.listing.get('sqft')} Square Feet and sits on {this.state.listing.get('acres')} Acres</li>
						
						<li>Built in {this.state.listing.get('year')}</li>
						<li>About This Listing: {this.state.listing.get('blurb')}</li>
						<li>Offered By: {this.state.listing.get('user').firstName} {this.state.listing.get('user').lastName}</li>
						<li>Phone: {this.state.listing.get('user').phone}</li>
						<li>Email: {this.state.listing.get('user').email}</li>
					</ul>
				</div>
			</div>
			);
	},
	update(listing) {
		this.setState({listing: listing});
	}
});