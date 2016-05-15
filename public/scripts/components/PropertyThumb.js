import React from 'react';
import {browserHistory} from 'react-router';


export default React.createClass({
	render: function() {
		console.log('this.props.images: ', this.props.photos);
		return (
			<div onClick={this.goDetails} className="propThumb">
				<div>
					<img className="thumbImg" src={this.props.photos[0].url}/>
				</div>
				<div className="thumbInfo">
					<ul className="detailsInfo">
						<li>{this.props.address}</li>
						<li>{this.props.rentSale}</li>
						<li>${this.props.price}</li>
						<li>Offered By: {this.props.firstName} {this.props.lastName}</li>
					</ul>
				</div>
			</div>
			);
	},
	goDetails: function(e) {
		browserHistory.push(`/listings/${this.props.id}/details`);
	}
});