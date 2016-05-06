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
						<li>{this.props.address}</li>
						<li>{this.props.rentSale}</li>
						<li>{this.props.price}</li>
						<li>{this.props.agent}</li>
					</ul>
				</div>
			</div>
			);
	}
});