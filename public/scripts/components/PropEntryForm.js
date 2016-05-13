import React from 'react';

export default React.createClass({
	getInitialState: function() {
		return {
			formData: {}
		};
	},
	componentDidMount: function() {
		this.props.model.on('change', () => {
			this.forceUpdate();
		});
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
					<span>Address:</span>
					<input type="text" placeholder="Address" data-key="address" value={this.props.model.get('address')} ref="address"/>
					<span>Price:</span>	
					<input type="text" placeholder="Price" data-key="price" value={this.props.model.get('price')} ref="price"/>
					<span>Bedrooms:</span>
					<input type="text" placeholder="Beds" data-key="beds" value={this.props.model.get('beds')} ref="beds"/>
					<span>Bathrooms:</span>
					<input type="text" placeholder="Baths" data-key="baths" value={this.props.model.get('baths')} ref="baths"/>
					<span>Square Feet:</span>
					<input type="text" placeholder="Square Feet" data-key="sqft" value={this.props.model.get('sqft')} ref="sqft"/>
					<span>Acres:</span>
					<input type="text" placeholder="Acres" data-key="acres" value={this.props.model.get('acres')} ref="acres"/>
					<span>Property Type:</span>
					<select name="typedropdown" data-key="type" ref="type" value={this.props.model.get('type')}>
						<option>Choose Type</option>
						<option>House</option>
						<option>Condo</option>
						<option>Townhouse</option>
						<option>Apartment</option>
						<option>Multifamily</option>
					</select>
					<span>For Rent/Sale:</span>
					<select name="rentSaleDropdown" data-key="rentSale" value={this.props.model.get('rentSale')}>
						<option>Choose Rent/Sale</option>
						<option>For Sale</option>
						<option>For Rent</option>
					</select>
					<span>Stories:</span>
					<input type="text" placeholder="Stories" data-key="stories" value={this.props.model.get('stories')} ref="stories"/>
					<span>Year Built:</span>
					<input type="text" placeholder="Year Built" data-key="year" value={this.props.model.get('year')} ref="year"/>
					<span>Description:</span>
					<textarea placeholder="Description" data-key="blurb" value={this.props.model.get('blurb')} ref="blurb" />
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