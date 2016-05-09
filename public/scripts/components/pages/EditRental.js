import React from 'react';
import PropEntryForm from './../PropEntryForm';
import RentalModel from './../../models/RentalModel';
import rentals from './../../collections/RentalCollection';

export default React.createClass({
	getInitialState: function() {
		return{
			rental: new RentalModel(),
			rentals: rentals
		};
	},
	componentDidMount: function() {
		rentals.on('update', this.updateRentals);
		rentals.fetch();
	},
	updateRentals: function() {
		this.setState({rentals: rentals});
	},
	render: function() {
		const userRentals = this.state.rentals.filter((val, i, array) => {
			if(val.get('userId') === window.user.id) {
				return true;
			} else {
				return false;
			}
		}).map((val, i, array) => {
			return (
				<option value={val.get('address')} key={i}>{val.get('address')}</option>
			);
		});
		return (
			<div className="dashboardDiv pageDiv">
				<a className="breadCrumbs crumbOne" href="/">Home</a><i className="fa fa-angle-right"></i><a className="breadCrumbs" href="/dashboard">Dashboard</a>
				<h1>Edit Rental</h1>
				<select name="editdropdown" onChange={this.fillForm}>
					<option value="pick">Choose Rental to Edit</option>
					{userRentals}
				</select>
				<PropEntryForm model={this.state.rental}/>
				<input type="filepicker" data-fp-apikey="AWEM8RWC9TUScrspS0Rdiz" onchange={this.picSubmit} />
			</div>
			);
	},
	picSubmit: function() {
		filepicker.pick(
			function(Blob){
			console.log(Blob.url);
			});
	},
	fillForm: function() {

	}
});