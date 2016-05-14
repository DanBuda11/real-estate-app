import React from 'react';
import Listing from './../../models/ListingModel';

export default React.createClass({
	getInitialState: function() {
		let listing = new Listing({
			id: this.props.params.listingId,
			user:{},
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
		const listingPhotos = this.state.listing.get('photos').map((photo, i, array) => {
			return (
				<div 
					className="bigPhotoBox"
					key={photo.id}>
					<img className="bigPhoto"
						src={photo.url}
						/>
				</div>
				);
		});	
		return (
			<div className="listingPage pageDiv">
				<a className="breadCrumbs crumbOne" href="/">Home</a><i className="fa fa-angle-right"></i><a className="breadCrumbs" href="/listings">Listings</a><i className="fa fa-angle-right"></i><a className="breadCrumbs" href={`/listings/${this.state.listing.get('id')}/details`}>Details</a>
				<h1>Photos for {this.state.listing.get('address')}</h1>
				{listingPhotos}
			</div>
			);
		
	},
	update: function(listing) {
		this.setState({listing: listing});
	}
});