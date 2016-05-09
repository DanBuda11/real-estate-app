import React from 'react';
import {browserHistory}from 'react-router';

export default React.createClass({
	render: function() {
		return (
			<div onClick={this.goDetails} className="propThumb">
				<div>
					<img className="thumbImg" src="http://www.fillmurray.com/200/200"/>
				</div>
				<div className="thumbInfo">
					<ul>
						<li>{this.props.firstName} {this.props.lastName}</li>
						<li>{this.props.phone}</li>
						<li>{this.props.email}</li>
					</ul>
				</div>
			</div>
			);
	},
	goDetails: function(e) {
		browserHistory.push(`/findagent/${this.props.id}/details`);
	}
});