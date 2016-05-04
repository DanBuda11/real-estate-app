import React from 'react';
import {Link} from 'react-router';

export default React.createClass({
	render: function() {
		return (
			<div className="homeContainer">
				<h1>Home Finder Lite</h1>
				<div className="homeBox">
					<Link to="/forsale">Find a Home for Sale</Link>
				</div>
				<div className="homeBox">
					<Link to="/forrent">Find a Home for Rent</Link>
				</div>
				<div className="homeBox">
					<Link to="/findagent">Find an Agent</Link>
				</div>
				<div className="homeBox">
					<Link to="auth/register">Register for an Agent Account</Link>
				</div>
				<div className="homeBox">
					<Link to="/login">Login</Link>
				</div>
				<input type="filepicker" data-fp-apikey="AWEM8RWC9TUScrspS0Rdiz"
onchange="alert(event.fpfile.url)" />
			</div>
			);
	}
});