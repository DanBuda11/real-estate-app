import React from 'react';

export default React.createClass({
	render: function() {
		return (
			<div>
				<div>
					<img src=""/>
				</div>
				<div>
					<ul>
						<li>{this.props.firstName} {this.props.lastName}</li>
						<li>{this.props.phone}</li>
						<li>{this.props.email}</li>
					</ul>
				</div>
			</div>
			);
	}
});