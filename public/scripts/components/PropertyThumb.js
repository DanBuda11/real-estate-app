import React from 'react';
import { browserHistory } from 'react-router';

export default React.createClass({
	render() {
		return (
			<div onClick={this.goDetails} className="propThumb">
				<div>
					{this.props.photos[0] ? (<img className="thumbImg" src={this.props.photos[0].url}/>) : (<img  className="thumbImg" src='./../../images/no_image_avail.png' />)}
				</div>
				<div className="thumbInfo">
					<ul className="detailsInfo">
						<li className="propThumbAddress">{this.props.address}</li>
						{(this.props.rentSale === 'For Rent') ? (<li className="rentColor">{this.props.rentSale} ${this.props.price}</li>) : (<li className="saleColor">{this.props.rentSale} ${this.props.price}</li>)}
						<li className="propThumbAddress">Offered By: {this.props.firstName} {this.props.lastName}</li>
					</ul>
				</div>
			</div>
			);
	},
	goDetails(e) {
		browserHistory.push(`/listings/${this.props.id}/details`);
	}
});