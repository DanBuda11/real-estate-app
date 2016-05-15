import React from 'react';
import {browserHistory}from 'react-router';

export default React.createClass({
	render: function() {
		return (
			<div onClick={this.goDetails} className="propThumb">
				<div>
					<img className="thumbImg" src={this.props.image}/>
				</div>
				<div className="thumbInfo">
					<ul className="detailsInfo">
						<li>{this.props.firstName} {this.props.lastName}</li>
						<li>{this.props.phone}</li>
						<li>{this.props.email}</li>
					</ul>
				</div>
			</div>
			);
	},
	goDetails: function(e) {
		browserHistory.push(`/agents/${this.props.id}/details`);
	}
});