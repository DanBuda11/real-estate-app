import React from 'react';
import {Link} from 'react-router';
import AgentCollection from './../../collections/AgentCollection';

export default React.createClass({
	getInitialState: function() {
		let agents = AgentCollection;
		return {
			agents: agents
		};
	},
	componentDidMount: function() {
		this.state.agents.fetch();
		console.log(this.state.agents);
	},
	render: function() {
		return (
			<div>
				<a href="/">Home</a>
				<h1>Find an Agent</h1>
				<Link to="/findagent/details">Agent Details</Link>
				
			</div>
			);
	}
});

				// <Link to="/findagent/details">Agent Details</Link>
