import React from 'react';

export default React.createClass({
	render: function() {
		return (
			<div>
				<a href="/">Home</a><i className="fa fa-angle-right"></i><a href="/dashboard">Dashboard</a>
				<h1>Create New Listing</h1>
				<h2>Input Form Goes Here</h2>
				<button>Clear Input</button>
				<button type="submit">Submit</button>
				<input type="filepicker" data-fp-apikey="AWEM8RWC9TUScrspS0Rdiz"
onchange="alert(event.fpfile.url)" />
				
			</div>
			);
	}
});