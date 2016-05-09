import React from 'react';
import {Link} from 'react-router';
import Rayon from 'rayon';

export default React.createClass({
	getInitialState: function() {
		return {
			profileModalVisible: false
		};
	},
	render: function() {
		return (
			<div>
				<div className="dashboardDiv pageDiv">
					<a className="breadCrumbs crumbOne" href="/">Home</a>
					<h1>Dashboard Main</h1>
					<h2>Manage Listings</h2>
					<Link to="/dashboard/newlisting">New Listing</Link>
					<Link to="/dashboard/editlisting">Edit Listing</Link>
					<h2>Manage Rentals</h2>
					<Link to="/dashboard/newrental">New Rental</Link>
					<Link to="/dashboard/editrental">Edit Rental</Link>
					<a onClick={this.profileOpenModal}>Edit Profile</a>
				</div>
				<Rayon className="profileForm" isOpen={this.state.profileModalVisible} onClose={this.profileCloseModal}>
					<form onSubmit={this.profileUpdate}>
						<div>
							<input type="text" placeholder="first name" name="firstName" ref="firstName"/>
						</div>
						<div>
							<input type="text" placeholder="last name" name="lastName" ref="lastName"/>
						</div>
						<div>
							<input type="text" placeholder="phone" name="phone" ref="phone"/>
						</div>
						<div>
							<input type="email" placeholder="email" name="email" ref="email"/>
						</div>
						<div>
							<input type="text" placeholder="bio" name="bio" ref="bio"/>
						</div>
						<div>
							<input type="password" placeholder="password" name="password" ref="password"/>
						</div>
						<button>Register</button>
					</form>
					<button onClick={this.profileCloseModal}>Cancel</button>
				</Rayon>
			</div>
			);
	},
	profileOpenModal: function() {
		this.setState({
			profileModalVisible: true
		});
	},
	profileCloseModal: function() {
		this.setState({
			profileModalVisible: false
		});
	},
	profileUpdate: function() {

	}
});



