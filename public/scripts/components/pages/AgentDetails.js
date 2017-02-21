import React from 'react';
import Agent from './../../models/UserModel';

export default React.createClass({
	getInitialState() {
		// Grab the info for the agent whose thumbnail was clicked on
		let agent = new Agent({id: this.props.params.agentId});
		return {agent: agent};
	},
	componentDidMount() {
		this.state.agent.on('change', this.update);
		this.state.agent.fetch();
	},
	componentWillUnmount() {
		this.state.agent.off('change');
	},
	render() {
		// Display agent's info to screen pulling from current state
		return (
			<div className="listingPage pageDiv" id="content">
				<a className="breadCrumbs crumbOne" href="/">Home</a><i className="fa fa-angle-right"></i><a className="breadCrumbs" href="/agents">Agents</a>
				<h2>{this.state.agent.get('firstName')} {this.state.agent.get('lastName')}</h2>
				<div className="detailsPhotoBox">
					{this.state.agent.get('image') ? (<img className="detailsPhoto" src={this.state.agent.get('image')}/>) : (<img className="detailsPhoto" src='./../../../images/no_image_avail.png'/>)}
				</div>
				<div className="agentDetailsBlock">
					<ul className="detailsList">
						<li>About {this.state.agent.get('firstName')}: {this.state.agent.get('bio')}</li>
						<li>Phone: {this.state.agent.get('phone')}</li>
						<li>Email: {this.state.agent.get('email')}</li>
					</ul>
					<div className="socialButtons">
						{this.state.agent.get('facebook') ? <a className="socialButton" href={this.state.agent.get('facebook')}><i className="fa fa-facebook-square fa-3x"></i></a> : ''}
						{this.state.agent.get('twitter') ? <a className="socialButton" href={this.state.agent.get('twitter')}><i className="fa fa-twitter-square fa-3x"></i></a> : ''}
						{this.state.agent.get('linkedin') ? <a className="socialButton" href={this.state.agent.get('linkedin')}><i className="fa fa-linkedin-square fa-3x"></i></a> : ''}
					</div>
				</div>
			</div>
			);
	},
	update(agent) {
		this.setState({agent: agent});
	}
});