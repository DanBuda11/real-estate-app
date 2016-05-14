import React from 'react';
import {browserHistory} from 'react-router';

export default React.createClass({
	render: function() {
		return (
			<div className="homeContainer">
				<div className="welcomeBox">
					<h3 className="homeFinderNameMobile">Home Finder Lite</h3>
					<p className="welcome">Your new home</p>
					<p className="welcome">A few clicks away</p>
				</div>
				<div className="homeBoxes">
						<input type="button" className="homeBoxLink" onClick={this.toListings} value="Find a Home"></input>
						<input type="button" className="homeBoxLink" onClick={this.toAgents} value="Find an Agent"></input>
				</div>
			</div>
			);
	},
	toListings: function() {
		browserHistory.push('/listings');
	},
	toAgents: function() {
		browserHistory.push('/agents');
	}
});