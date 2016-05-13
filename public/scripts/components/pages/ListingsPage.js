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
					<select name="listingsSort" onChange={this.sortListings}>
						<option>Choose Sort Option</option>
						<option>For Sale Only</option>
						<option>For Rent Only</option>
						<option value="price">By Price</option>
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
		Listings.comparator = (listing) => {
			return listing.get(e.target.value);
		};
		Listings.sort();
		this.forceUpdate();


// var alphabetical = books.sortBy(function(book) {
//   return book.author.get("name").toLowerCase();
// });


		// _.sortBy(this.state.Listings, e.target.value);
		// .sort(function(left, right) {
  //     var a = left.criteria;
  //     var b = right.criteria;
  //     if (a !== b) {
  //       if (a > b || a === void 0) return 1;
  //       if (a < b || b === void 0) return -1;
      }
});