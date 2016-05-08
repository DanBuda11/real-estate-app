import React from 'react';
import Rayon from 'rayon';
import session from './../models/SessionModel';
import {browserHistory} from 'react-router';
import $ from 'jquery';

export default React.createClass({
	getInitialState: function() {
		return {
			regModalVisible: false,
			logModalVisible: false,
			user: session
		};
	},
	componentDidMount: function() {
		this.state.user.on('change', (user) => {
			this.setState({
				user: user
			});
		});
	},
	render: function() {
		if (this.state.user.get('id')) {
			return (
				<div>
					<div className="navBar">
						<div className="logoDiv">
							<img src="./../../images/homefinder_logo.png" className="homeFinderLogo navLeft" />
							<h3 className="homeFinderName navLeft">Home Finder Lite</h3>
						</div>
						<div className="navLinks">
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
		} else {
			return (
				<div>
					<div className="navBar">
						<div className="logoDiv">
							<img src="./../../images/homefinder_logo.png" className="homeFinderLogo navLeft" />
							<h3 className="homeFinderName navLeft">Home Finder Lite</h3>
						</div>
						<div className="navLinks">
							<a className="navLink" onClick={this.regOpenModal}>Sign Up</a>
							<a className="navLink" onClick={this.logOpenModal}>Sign In</a>
						</div>
					</div>
					<Rayon className="regForm" isOpen={this.state.regModalVisible} onClose={this.regCloseModal}>
						<form onSubmit={this.register}>
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
						<button onClick={this.regCloseModal}>Cancel</button>
					</Rayon>
					<Rayon className="loginForm" isOpen={this.state.logModalVisible} onClose={this.logCloseModal}>
						<form onSubmit={this.login}>
							<div>
								<input type="email" placeholder="email" name="email" ref="email"/>
							</div>
							<div>
								<input type="password" placeholder="password" name="password" ref="password"/>
							</div>
							<button>Log in</button>
						</form>
						<button onClick={this.logCloseModal}>Cancel</button>
					</Rayon>
				</div>
				);
		}
	},
	login: function(e) {
		e.preventDefault();
		// validate		
		$.ajax({
			url: '/auth/login',
			method: 'POST',
			accepts: 'application/json',
			data: {
				email: this.refs.email.value,
				password: this.refs.password.value
			},
			success: (data) => {
				this.state.user.set(data);
				console.log('success');
				console.log(data);
				this.logCloseModal();
				browserHistory.push('/dashboard');
			},
			error: function() {
				console.log('error');
			},
			complete: function() {
				console.log('complete');
			}
		});	
	},
	register: function(e) {
		e.preventDefault();
		$.ajax({
			url: '/auth/register',
			method: 'POST',
			accepts: 'application/json',
			data: {
				firstName: this.refs.firstName.value,
				lastName: this.refs.lastName.value,
				phone: this.refs.phone.value,
				email: this.refs.email.value,
				bio: this.refs.bio.value,
				password: this.refs.password.value
			},
			success: (data) => {
				this.state.user.set(data);
				console.log('success');
				console.log(data);
				this.regCloseModal();
				browserHistory.push('/dashboard');
			}
		});
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
				console.log(this.state.user);

	},
	logCloseModal: function() {
		this.setState({
			logModalVisible: false
		});
				console.log(this.state.user);

	},
	logout: function(e) {
		e.preventDefault();
		$.ajax({
			type: 'POST',
			url: '/auth/logout',
			success: () => {
				this.state.user.clear();
				browserHistory.push('/');
			}
		});
	}
});