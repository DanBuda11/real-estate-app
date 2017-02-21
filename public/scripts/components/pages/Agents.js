import React from 'react';
import Agents from './../../collections/UserCollection';
import AgentThumb from './../AgentThumb';

export default React.createClass({
	getInitialState() {
		// Set state of Agents to the complete list of agents in the databasea
		return {Agents: Agents};
	},
	componentDidMount() {
		Agents.on('update', this.updateAgents);
		Agents.fetch();
	},
	componentWillUnmount() {
		Agents.off('update');
	},
	updateAgents() {
		this.setState({Agents: Agents});
	},
	render() {
		// Render thumbnail views of all agents to the screen and add props to AgentThumbs
		const agents = this.state.Agents.map((agent, i) => {
			return (
				<AgentThumb
					key={agent.get('id')}
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
				);
		});
		return (
			<div className="listingPage pageDiv" id="content">
				<a className="breadCrumbs crumbOne" href="/">Home</a>
				<h2>Agents</h2>
				<div className="grid">
					{agents}
				</div>
			</div>
			);
	}
});