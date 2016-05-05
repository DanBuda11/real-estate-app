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
						<li>For Sale/Rent</li>
						<li>{this.props.price}</li>
					</ul>
				</div>
			</div>
			);
	}
});