import React from 'react';
import ListingCollection from './../collections/ListingCollection.js';

export default React.createClass({
	getInitialState: function() {
		return {formData: {}};
	},
	componentDidMount: function() {
		// check this.props.type to deteremine where to make the ajax request
  		//make an ajax request and update state formData
	},
	render: function() {
		return(
		<div>
			<form onChange={this.formChange}>
				<input type="text" placeholder="Address" value={this.state.formData.address} ref="address"/>	
				<input type="text" placeholder="Price" value={this.state.formData.price} ref="price"/>
				<input type="text" placeholder="Beds" value={this.state.formData.beds} ref="beds"/>
				<input type="text" placeholder="Baths" value={this.state.formData.baths} ref="baths"/>
				<input type="text" placeholder="Square Feet" value={this.state.formData.sqft} ref="sqft"/>
				<input type="text" placeholder="Acres" value={this.state.formData.acres} ref="acres"/>
				<input type="text" placeholder="Property Type" value={this.state.formData.type} ref="type"/>
				<input type="text" placeholder="Stories" value={this.state.formData.stories} ref="stories"/>
				<input type="text" placeholder="Year Built" value={this.state.formData.year} ref="year"/>
				<input type="button" onClick={this.clearForm} value="Clear"/>
				<input type="button" onCLick={this.deleteHouse} value="Delete" />
				<input type="button" onClick={this.handleSubmit} value="Submit"/>
			</form>
		</div>
		);
	},
	formChange: function() {
		this.setState({formData: {
     		address: this.refs.address.value,
     		price: this.refs.price.value,
     		beds: this.refs.beds.value,	
     		baths: this.refs.baths.value,
     		sqft: this.refs.sqft.value,
     		acres: this.refs.acres.value,
     		type: this.refs.type.value,
     		stories: this.refs.stories.value,
     		year: this.refs.year.value
    }});
	},
	clearForm: function() {
		this.setState({formData: {}});
	},
	handleSubmit: function(e) {
		console.log(this.state.formData);
		e.preventDefault();
    	ListingCollection.save({
    		address: this.refs.address.value,
     		price: this.refs.price.value,
     		beds: this.refs.beds.value,	
     		baths: this.refs.baths.value,
     		sqft: this.refs.sqft.value,
     		acres: this.refs.acres.value,
     		type: this.refs.type.value,
     		stories: this.refs.stories.value,
     		year: this.refs.year.value
    	});
	}
});

// fetch data 
// this.props.params for route
// react router documentation
// if statements for which route to plug into fetch call