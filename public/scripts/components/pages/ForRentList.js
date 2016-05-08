import React from 'react';
import {Link} from 'react-router';
import Rentals from './../../collections/RentalCollection';
import PropertyThumb from './../PropertyThumb.js';
import SearchBar from './../SearchBar.js';

export default React.createClass({
	getInitialState: function() {
		return { Rentals: Rentals};
	},
	componentDidMount: function() {
		Rentals.on('update', this.updateRentals);
		Rentals.fetch({
			data: {
				withRelated: ['user']
			}
		});
	},
	updateRentals: function() {
		this.setState({Rentals: Rentals});
	},
	render: function() {
		const rentals = this.state.Rentals.map((rental, i, array) => {
			return (
				<PropertyThumb
					key={rental.get('id')}
					id={rental.get('id')}
					address={rental.get('address')}
					price={rental.get('price')}
					beds={rental.get('beds')}
					baths={rental.get('baths')}
					sqft={rental.get('sqft')}
					acres={rental.get('acres')}
					type={rental.get('type')}
					stories={rental.get('stories')}
					year={rental.get('year')} 
					userId={rental.get('userid')}
					rentSale={rental.get('rentSale')}
					firstName={rental.get('user').firstName}
					lastName={rental.get('user').lastName}
						/>
				);
		});
		return (
			<div className="listingPage">
				<a href="/">Home</a>
				<h1>Rentals Main Page</h1>
				<SearchBar />
				{rentals}
			</div>
			);
	}
});