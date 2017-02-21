import React from 'react';

export default React.createClass({
	getInitialState() {
		return {
			formData: {}
		};
	},
	componentDidMount() {
		this.props.model.on('change', () => {
			this.forceUpdate();
		});
	},
	render() {
		let deleteButton = null;
		if (this.props.model.id) {
			deleteButton = <input type="button" className="entryButton" onClick={this.props.deleteConfirm} value="Delete" />;
		}
		return(
		<div className="propEntryDiv">
		<div className="propEntryForm">
			<div className="photoButtonDiv">
				<button className="photoButton" onClick={this.props.picSubmit}>Manage Photos</button>
			</div>
			<form onChange={this.props.formChange} onSubmit={this.props.formSubmit}>
				<div className="propFormInput">
					<div>
						<div className="inputLineSale">
							<span>For Rent/Sale:</span>
							<select name="rentSaleDropdown" data-key="rentSale" value={this.props.model.get('rentSale')}>
								<option>Choose Rent/Sale</option>
								<option>For Sale</option>
								<option>For Rent</option>
							</select>
						</div>
						<div className="inputLineType">
							<span>Property Type:</span>
							<select name="typedropdown" data-key="type" ref="type" value={this.props.model.get('type')}>
								<option>Choose Type</option>
								<option>House</option>
								<option>Condo</option>
								<option>Townhouse</option>
								<option>Apartment</option>
								<option>Multifamily</option>
							</select>
						</div>
					</div>
					<div className="inputLine">
						<span>Address:</span>
						<input type="text" placeholder="Address" data-key="address" value={this.props.model.get('address')} ref="address"/>
					</div>
					<div className="priceBedBath">
						<div className="inputPrice">
							<span>Price:</span>	
							<input type="text" placeholder="Price" data-key="price" value={this.props.model.get('price')} ref="price"/>
						</div>
						<div className="inputBed">
							<span>Bedrooms:</span>
							<input type="text" placeholder="Beds" data-key="beds" value={this.props.model.get('beds')} ref="beds"/>
						</div>
						<div className="inputBath">
							<span>Bathrooms:</span>
							<input type="text" placeholder="Baths" data-key="baths" value={this.props.model.get('baths')} ref="baths"/>
						</div>
					</div>
					<div className="entryLastRow">
						<div className="inputSqft">
							<span>Square Feet:</span>
							<input type="text" placeholder="Square Feet" data-key="sqft" value={this.props.model.get('sqft')} ref="sqft"/>
						</div>
						<div className="inputAcres">
							<span>Acres:</span>
							<input type="text" placeholder="Acres" data-key="acres" value={this.props.model.get('acres')} ref="acres"/>
						</div>
						<div className="inputStories">
							<span>Stories:</span>
							<input type="text" placeholder="Stories" data-key="stories" value={this.props.model.get('stories')} ref="stories"/>
						</div>
						<div className="inputYear">
							<span>Year Built:</span>
							<input type="text" placeholder="Year Built" data-key="year" value={this.props.model.get('year')} ref="year"/>
						</div>
					</div>
					<div className="inputLine">
						<span>Description:</span>
						<textarea rows="4" className="propTextarea" placeholder="Property Description (500 char max)" data-key="blurb" value={this.props.model.get('blurb')} ref="blurb" />
					</div>
				</div>
				<div className="propFormButtons">
					<input type="submit" value="Submit"/>
				</div>
				<div className="entryButtonDiv">
					<input className="entryButton" type="button" onClick={this.props.clearForm} value="Clear"/>
					{deleteButton}
				</div>
			</form>
		</div>
		</div>
		);
	}
});