import React from 'react';
import { browserHistory } from 'react-router';

export default React.createClass({
	render() {
		return (
			<div className="homeContainer" id="content">
				<div className="welcomeBox">
					<h3 className="homeFinderNameMobile">Home Finder Lite</h3>
					<p className="welcome">Welcome Home!</p>
				</div>
				<div className="homeBoxes">
						<input type="button" className="homeBoxLink" onClick={this.toListings} value="Find a Home"></input>
						<input type="button" className="homeBoxLink" onClick={this.toAgents} value="Find an Agent"></input>
				</div>
			</div>
			);
	},
	toListings() {
		browserHistory.push('/listings');
	},
	toAgents() {
		browserHistory.push('/agents');
	}
});