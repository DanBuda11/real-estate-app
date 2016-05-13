import Backbone from 'backbone';

export default Backbone.Model.extend({
	defaults:{
		createdAt: null,
		updatedAt: null,
		deletedAt: null,
		userId: '',
		address: '',
		price: '',
		beds: '',
		baths: '',
		sqft: '',
		acres: '',
		type: '',
		stories: '',
		year: '',
		blurb: ''
	},
	urlRoot: '/api/v1/listing',
	// url: function() {
	// 	let urlSuffix = `/${this[this.idAttribute]}?withRelated[0]=user&`;
	// 	if (this[this.idAttribute]) {
	// 		return `${this.urlRoot}${urlSuffix}`;
	// 	} else {
	// 		return `${this.urlRoot}`;
	// 	}
	// },
	idAttribute: 'id'
});