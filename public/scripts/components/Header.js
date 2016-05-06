import React from 'react';
import Rayon from 'rayon';
import user from './../models/UserModel';
import {browserHistory} from 'react-router';
import $ from 'jquery';

export default React.createClass({
	getInitialState: function() {
		return {
			regModalVisible: false,
			regModalVisible: false,
			user: user
		};
	},
	componentDidMount: function() {
		this.state.user.on('change', () => {
			this.setState({
				user: user
			});
		});
	},
	render: function() {
		return (
			<div>
			<div className="navBar">
				<div className="logoDiv">
					<h3 className="homeFinderLogo navLeft">Logo Goes Here</h3>
					<h3 className="homeFinderName navLeft">Home Finder Lite</h3>
				</div>
				<div className="navLinks">
					<a className="navLink" onClick={this.regOpenModal}>Sign Up</a>
					<a className="navLink" onClick={this.logOpenModal}>Sign In</a>
					<a className="navLink" onClick={this.logout}>Sign Out</a>
				</div>
			</div>
			<Rayon className="regForm" isOpen={this.state.regModalVisible} onClose={this.regCloseModal}>
					<form action="/auth/register" method="post">
						<div>
							<input type="text" placeholder="first name" name="firstName"/>
						</div>
						<div>
							<input type="text" placeholder="last name" name="lastName"/>
						</div>
						<div>
							<input type="text" placeholder="phone" name="phone"/>
						</div>
						<div>
							<input type="email" placeholder="email" name="email"/>
						</div>
						<div>
							<input type="text" placeholder="bio" name="bio"/>
						</div>
						<div>
							<input type="password" placeholder="password" name="password"/>
						</div>
						<button>Register</button>
					</form>
					<button onClick={this.regCloseModal}>Cancel</button>
				</Rayon>
				<Rayon className="loginForm" isOpen={this.state.logModalVisible} onClose={this.logCloseModal}>
					<form action="auth/login" method="post">
						<div>
							<input type="email" placeholder="email" name="email"/>
						</div>
						<div>
							<input type="password" placeholder="password" name="password"/>
						</div>
						<button>Log in</button>
					</form>
					<button onClick={this.logCloseModal}>Cancel</button>
				</Rayon>
			</div>
			);
	},
	regOpenModal: function() {
		this.setState({
			regModalVisible: true
		});
		console.log(this.state.user.get('id'));
	},
	regCloseModal: function() {
		this.setState({
			regModalVisible: false
		});
				console.log(this.state.user.get('id'));

	},
	logOpenModal: function() {
		this.setState({
			logModalVisible: true
		});
				console.log(this.state.props.user);

	},
	logCloseModal: function() {
		this.setState({
			logModalVisible: false
		});
				console.log(this.state.props.user);

	},
	logout: function(e) {
		e.preventDefault();
		this.state.user.clear();
		$.ajax({
			type: 'POST',
			url: '/auth/logout'
		});
		browserHistory.push('/');
	}
});