import React from 'react';
import Rayon from 'rayon';
import session from './../models/SessionModel';
import {browserHistory, Link} from 'react-router';
import $ from 'jquery';
import filepicker from 'filepicker-js';

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
				<div className="navBar">
					<div>
						<div className="logoDiv">
							<a href="/">
								<img src="/images/homefinder_logo.png" className="homeFinderLogo navLeft" />
							</a>
							<a href="/">
								<h3 className="homeFinderName navLeft">Home Finder Lite</h3>
							</a>
						</div>
						<div className="hamburger">
							<i className="fa fa-bars fa-3x" onClick={this.burgerToggle}></i>
							<div className="mobile-menu">
								<Link to="listings" onClick={this.burgerToggle}>Find a Home</Link>
								<Link to="agents" onClick={this.burgerToggle}>Find an Agent</Link>
								<Link to="dashboard" onClick={this.burgerToggle}>Dashboard</Link>
								<a className="signOut" onClick={this.burgerLogout}>Sign Out</a> 
							</div>
						</div>
						<div className="navLinks">
							<span className="leftNavItem">Find</span>
							<Link className="navLink" to="/listings">Home</Link>
							<span className="divider">|</span>
							<Link className="navLink" to="/agents">Agent</Link>
							<span className="leftNavItem">Agents</span>
							<a className="navLink signOut" onClick={this.dashboard}>Dashboard</a>
							<span className="divider">|</span>
							<a className="navLink signOut" onClick={this.logout}>Sign Out</a>
						</div>
					</div>
				</div>
				);
		} else {
			return (
				<div className="navBar">
					<div>
						<div className="logoDiv">
							<a href="/">
								<img src="/images/homefinder_logo.png" className="homeFinderLogo navLeft" />
							</a>
							<a href="/">
								<h3 className="homeFinderName navLeft">Home Finder Lite</h3>
							</a>
						</div>
						<div className="hamburger">
							<i className="fa fa-bars fa-3x" onClick={this.burgerToggle}></i>
							<div className="mobile-menu">
								<Link to="listings" onClick={this.burgerToggle}>Find a Home</Link>
								<Link to="agents" onClick={this.burgerToggle}>Find an Agent</Link>
								<a href="#" onClick={this.burgerRegOpenModal}>Sign Up</a>
								<a href="#" onClick={this.burgerLogOpenModal}>Sign In</a> 
							</div>
						</div>
						<div className="navLinks">
							<span className="leftNavItem">Find</span>
							<Link className="navLink" to="/listings">Home</Link>
							<span className="divider">|</span>
							<Link className="navLink" to="/agents">Agent</Link>
							<span className="leftNavItem">Agents</span>
							<a className="navLink" href="#" onClick={this.regOpenModal}>Sign Up</a>
							<span className="divider">|</span>
							<a className="navLink" href="#" onClick={this.logOpenModal}>Sign In</a>
						</div>
					</div>
					<Rayon className="regForm" isOpen={this.state.regModalVisible} onClose={this.regCloseModal} bodyClass="rayon-no-overflow">
						<form onSubmit={this.register}>
							<div>
								<span>First Name</span>
								<input type="text" placeholder="Jon" name="firstName" ref="firstName"/>
							</div>
							<div>
								<span>Last Name</span>
								<input type="text" placeholder="Snow" name="lastName" ref="lastName"/>
							</div>
							<div>
								<span>Phone</span>
								<input type="text" placeholder="555-555-5555" name="phone" ref="phone"/>
							</div>
							<div>
								<span>Email</span>
								<input type="email" placeholder="email@example.com" name="email" ref="email"/>
							</div>
							<div>
								<span>Bio</span>
								<textarea placeholder="Bio (500 character max)" name="bio" ref="bio"/>
							</div>
							<div>
								<span><i className="fa fa-facebook-square"></i></span>
								<input type="text" placeholder="http://..." name="facebook" ref="facebook"/>
							</div>
							<div>
								<span><i className="fa fa-twitter-square"></i></span>
								<input type="text" placeholder="http://..." name="twitter" ref="twitter"/>
							</div>
							<div>
								<span><i className="fa fa-linkedin-square"></i></span>
								<input type="text" placeholder="http://..." name="linkedin" ref="linkedin"/>
							</div>
							<div>
								<span>Password</span>
								<input type="password" placeholder="******" name="password" ref="password"/>
							</div>
							<button>Register</button>
						</form>
						<button onClick={this.regCloseModal}>Cancel</button>
						<button onClick={this.picSubmit}>Choose Profile Photo</button>
					</Rayon>
					<Rayon className="loginForm" isOpen={this.state.logModalVisible} onClose={this.logCloseModal} bodyClass="rayon-no-overflow">
						<form onSubmit={this.login}>
							<div>
								<input type="email" placeholder="email@example.com" name="email" ref="email"/>
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
				password: this.refs.password.value,
				image: this.state.image,
				facebook: this.refs.facebook.value,
				twitter: this.refs.twitter.value,
				linkedin: this.refs.linkedin.value
			},
			success: (data) => {
				this.state.user.set(data);
				this.setState({image: ''});
				console.log('success');
				console.log(data);
				this.regCloseModal();
				browserHistory.push('/dashboard');
			}
		});
	},
	regOpenModal: function(e) {
		e.preventDefault();
		this.setState({
			regModalVisible: true
		});
		console.log(this.state.user.get('id'));
	},
	burgerRegOpenModal: function(e) {
		e.preventDefault();
		this.setState({
			regModalVisible: true
		});
		this.burgerToggle();
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
	burgerLogOpenModal: function() {
		this.setState({
			logModalVisible: true
		});
		this.burgerToggle();
	},
	logCloseModal: function() {
		this.setState({
			logModalVisible: false
		});
				console.log(this.state.user);

	},		
	logout: function(e) {
		console.log('logout function running');
		e.preventDefault();
		$.ajax({
			type: 'POST',
			url: '/auth/logout',
			success: () => {
				console.log('logout function success');
				this.state.user.clear();
				browserHistory.push('/');
			}
		});
	},
	burgerLogout: function(e) {
		console.log('burgerLogout running');
		e.preventDefault();
		$.ajax({
			type: 'POST',
			url: '/auth/logout',
			success: () => {
				console.log('burgerLogout success');
				this.state.user.clear();
				this.burgerToggle();
				browserHistory.push('/');
			}
		});
	},
	dashboard: function() {
		browserHistory.push('/dashboard');
	},
	picSubmit: function() {
		filepicker.pick({
			conversions: ['crop', 'rotate'],
			cropRatio: 1,
			cropForce: true,
			mimeType: 'image/*'},
			(Blob) => {
				this.setState({image: Blob.url});
			});
	},
	burgerToggle: function() {
		$('.mobile-menu').toggle();
	}
});