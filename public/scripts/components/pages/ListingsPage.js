import React from 'react';
import Listings from './../../collections/ListingCollection';
import PropertyThumb from './../PropertyThumb.js';

export default React.createClass({
	getInitialState: function() {
		return {Listings: Listings};
	},
	componentDidMount: function() {
		Listings.on('update', this.updateListings);
		Listings.fetch({
			data: {
				withRelated: ['user', 'photos']
			}
		});
	},
	componentWillUnmount: function() {
		Listings.off('update');
	},
	updateListings: function() {
		this.setState({Listings: Listings});
	},
	render: function() {
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
				userId={listing.get('userId')}
				rentSale={listing.get('rentSale')}
				firstName={listing.get('user').firstName}
				lastName={listing.get('user').lastName}
				photos={listing.get('photos')}
				 />
				
			);
		});
		return (
			<div className="listingPage pageDiv">
				<a className="breadCrumbs crumbOne" href="/">Home</a>
				<h1>Listings Main Page</h1>
				<div className="searchBar">
					<select name="listingsSort" id="listingSort" onChange={this.sortListings}>
						<option>Show All</option>
						<option>For Sale Only</option>
						<option>For Rent Only</option>
						<option value="price">By Price High to Low</option>
						<option value="price">By Price Low to High</option>
						<option value="beds">By Bedrooms</option>
						<option value="baths">By Bathrooms</option>
						<option value="sqft">By Square Feet</option>
					</select>
					<button type="submit" onClick={this.clearSearch}>Reset Sort</button>
				</div>
				{listings}
			</div>
			);
	},
	clearSearch: function() {
		Listings.fetch();
	},
	sortListings: function(e) {
		e.preventDefault();
		let newSort = document.getElementById('listingSort');
		if (newSort.options[newSort.selectedIndex].text === 'By Price High to Low') {
			console.log('this should run the high to low price function');
		} else if (newSort.options[newSort.selectedIndex].text === 'By Price Low to High') {
			console.log('this should run the low to high price function');
		} else if (newSort.options[newSort.selectedIndex].text === 'For Sale Only') {
			console.log('this should run the for sale only function');
		} else if (newSort.options[newSort.selectedIndex].text === 'For Rent Only') {
			console.log('this should run the for rent only function');
		} else {
			console.log('this should show all the listings');
		}
      }
});