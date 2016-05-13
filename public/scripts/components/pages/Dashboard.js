import React from 'react';
import {Link} from 'react-router';
import Rayon from 'rayon';
import SessionModel from './../../models/SessionModel';
import users from './../../collections/UserCollection';

export default React.createClass({
	getInitialState: function() {
		return {
			profileModalVisible: false,
			user: SessionModel,
			users: users,
			editingPropId: null
		};
	},
	componentDidMount: function() {
		users.on('update', this.updateUsers);
		this.state.users.on('change', this.updateUsers);
		users.fetch();
	},
	componentWillUnmount: function() {
		users.off('update');
	},
	updateUsers: function() {
		this.setState({users: users});
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
					<a onClick={this.profileOpenModal}>Edit Profile</a>
				</div>
				<Rayon className="profileForm" isOpen={this.state.profileModalVisible} onClose={this.profileCloseModal}>
					<form onChange={this.formChange} onSubmit={this.formSubmit}>
						<div>
							<input type="text" placeholder="First Name" data-key="firstName" defaultValue={this.state.user.get('firstName')} ref="firstName"/>
						</div>
						<div>
							<input type="text" placeholder="Last Name" data-key="lastName" defaultValue={this.state.user.get('lastName')} ref="lastName"/>
						</div>
						<div>
							<input type="text" placeholder="Phone" data-key="phone" defaultValue={this.state.user.get('phone')} ref="phone"/>
						</div>
						<div>
							<input type="email" placeholder="Email" data-key="email" defaultValue={this.state.user.get('email')} ref="email"/>
						</div>
						<div>
							<input type="text" placeholder="Bio" data-key="bio" defaultValue={this.state.user.get('bio')} ref="bio"/>
						</div>
						<div>
							<textarea placeholder="bio (500 character max)" name="bio"/>
						</div>
						<button>Update</button>
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
	formChange: function(e) {
		// console.log(e.target.dataset.key);
		this.state.user.set(e.target.dataset.key, e.target.value);
		this.setState({
			user: this.state.user
		});
	},
	formSubmit: function(e) {
		e.preventDefault();
		this.state.user.save(null, {success: this.profileCloseModal});
	}
});



