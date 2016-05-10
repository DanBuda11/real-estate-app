import React from 'react';
import {Link} from 'react-router';
import Agent from './../../models/UserModel';

export default React.createClass({
	getInitialState: function() {
		let agent = new Agent({id: this.props.params.agentId});
		return {agent: agent};
	},
	componentDidMount: function() {
		this.state.agent.on('change', this.update);
		this.state.agent.fetch();
	},
	render: function() {
		return (
			<div className="listingPage pageDiv">
				<a className="breadCrumbs crumbOne" href="/">Home</a><i className="fa fa-angle-right"></i><a className="breadCrumbs" href="/findagent">Agents</a>
				<h1>Agent Page for {this.state.agent.get('firstName')} {this.state.agent.get('lastName')}</h1>
				<div className="detailsPhoto">
					<img src="http://www.fillmurray.com/200/200"/>
				</div>
				<div className="agentDetailsBlock">
					<ul>
						<li>{this.state.agent.get('bio')}</li>
						<li>Phone: {this.state.agent.get('phone')}</li>
						<li>Email: {this.state.agent.get('email')}</li>
					</ul>
				</div>
			</div>
			);
	},
	update: function(agent) {
		this.setState({agent: agent});
	}
});