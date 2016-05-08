import React from 'react';
import PropEntryForm from './../PropEntryForm';
import RentalModel from './../../models/RentalModel';

export default React.createClass({
	getInitialState: function() {
		return{rental: new RentalModel()};
	},
	render: function() {
		return (
			<div>
				<a href="/">Home</a><i className="fa fa-angle-right"></i><a href="/dashboard">Dashboard</a>
				<h1>Edit Rental</h1>
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
	}
});