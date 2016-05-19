import React from 'react';
import Agents from './../../collections/UserCollection';
import AgentThumb from './../AgentThumb';

export default React.createClass({
	getInitialState: function() {
		return {Agents: Agents};
	},
	componentDidMount: function() {
		Agents.on('update', this.updateAgents);
		Agents.fetch();
	},
	componentWillUnmount: function() {
		Agents.off('update');
	},
	updateAgents: function() {
		this.setState({Agents: Agents});
	},
	render: function() {
		const agents = this.state.Agents.map((agent, i, array) => {
			return (
				<div>
				<AgentThumb
					key={i}
					id={agent.get('id')}
					firstName={agent.get('firstName')}
					lastName={agent.get('lastName')}
					phone={agent.get('phone')}
					email={agent.get('email')}
					bio={agent.get('bio')}
					image={agent.get('image')}
					facebook={agent.get('facebook')}
					linkedin={agent.get('linkedin')}
					twitter={agent.get('twitter')} />
				</div>
				);
		});
		return (
			<div className="listingPage pageDiv" id="content">
				<a className="breadCrumbs crumbOne" href="/">Home</a>
				<h2>Agents</h2>
				{agents}
			</div>
			);
	}
});