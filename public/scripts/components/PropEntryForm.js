import React from 'react';

export default React.createClass({
	getInitialState: function() {
		return {
			formData: {}
		};
	},
	componentDidMount: function() {
		// check this.props.type to deteremine where to make the ajax request
  		//make an ajax request and update state formData
	},
	render: function() {
		return(
		<div className="propEntryForm">
			<form onChange={this.props.formChange}>
				<div className="propFormInput">
					<input type="text" placeholder="Address" value={this.props.model.get('address')} ref="address"/>	
					<input type="text" placeholder="Price" value={this.props.model.get('price')} ref="price"/>
					<input type="text" placeholder="Beds" value={this.props.model.get('beds')} ref="beds"/>
					<input type="text" placeholder="Baths" value={this.props.model.get('baths')} ref="baths"/>
					<input type="text" placeholder="SqFt" value={this.props.model.get('sqft')} ref="sqft"/>
					<input type="text" placeholder="Acres" value={this.props.model.get('acres')} ref="acres"/>
					<input type="text" placeholder="Type" value={this.props.model.get('type')} ref="type"/>
					<input type="text" placeholder="Stories" value={this.props.model.get('stories')} ref="stories"/>
					<input type="text" placeholder="Year" value={this.props.model.get('year')} ref="year"/>
				</div>
				<div className="propFormButtons">
					<input type="button" onClick={this.clearForm} value="Clear"/>
					<input type="button" onCLick={this.deleteHouse} value="Delete" />
					<input type="button" onClick={this.handleSubmit} value="Submit"/>
				</div>
			</form>
		</div>
		);
	},
	handleSubmit: function(e) {
		e.preventDefault();
		this.props.model.save({userId: window.user.id});
	},
	clearForm: function() {
		this.refs.address.value = '';
		this.refs.price.value = '';
		this.refs.beds.value = '';
		this.refs.baths.value = '';
		this.refs.sqft.value = '';
		this.refs.acres.value = '';
		this.refs.type.value = '';
		this.refs.stories.value = '';
		this.refs.year.value = '';
	}
});