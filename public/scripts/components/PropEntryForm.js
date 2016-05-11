import React from 'react';

export default React.createClass({
	getInitialState: function() {
		return {
			formData: {}
		};
	},
	componentDidMount: function() {
		this.props.model.on('change', () => {
			console.log('model change');
			this.forceUpdate();
		});
		// check this.props.type to deteremine where to make the ajax request
  // 		make an ajax request and update state formData
	},
	render: function() {
		let deleteButton = null;
		if (this.props.model.id) {
			deleteButton = <input type="button" onClick={this.props.deleteConfirm} value="Delete" />;
		}
		return(
		<div className="propEntryForm">
			<form onChange={this.props.formChange} onSubmit={this.props.formSubmit}>
				<div className="propFormInput">
					<input type="text" placeholder="Address" data-key="address" value={this.props.model.get('address')} ref="address"/>	
					<input type="text" placeholder="Price" data-key="price" value={this.props.model.get('price')} ref="price"/>
					<input type="text" placeholder="Beds" data-key="beds" value={this.props.model.get('beds')} ref="beds"/>
					<input type="text" placeholder="Baths" data-key="baths" value={this.props.model.get('baths')} ref="baths"/>
					<input type="text" placeholder="Square Feet" data-key="sqft" value={this.props.model.get('sqft')} ref="sqft"/>
					<input type="text" placeholder="Acres" data-key="acres" value={this.props.model.get('acres')} ref="acres"/>
					<input type="text" placeholder="Type" data-key="type" value={this.props.model.get('type')} ref="type"/>
					<input type="text" placeholder="For Sale/Rent" data-key="rentSale" value={this.props.model.get('rentSale')} ref="rentSale" />
					<input type="text" placeholder="Stories" data-key="stories" value={this.props.model.get('stories')} ref="stories"/>
					<input type="text" placeholder="Year Built" data-key="year" value={this.props.model.get('year')} ref="year"/>
				</div>
				<div className="propFormButtons">
					<input type="button" onClick={this.props.clearForm} value="Clear"/>
					{deleteButton}
					<input type="submit" value="Submit"/>
				</div>
			</form>
		</div>
		);
	}
});