import React from 'react';
import {Link} from 'react-router';

export default React.createClass({
	render: function() {
		return (
			<div>
				<h1>Home Page</h1>
				<a>Why Dan?</a>
				<Link to="/buyers">Buyers</Link>
				<Link to="/sellers">Sellers</Link>
				<Link to="/investors">Investors</Link>
				<Link to="/listings">Listings</Link>
				<Link to="/homesearch">Search for Homes</Link>
				<Link to="/rentals">Properties for Rent</Link>
				<Link to="/stayinformed">Stay Informed</Link>
				<Link to="/austininfo">Austin Area Info</Link>
				<Link to="blog">Dan's Blog</Link>
				<a>Facebook Post</a>
			</div>
			);
	}
});