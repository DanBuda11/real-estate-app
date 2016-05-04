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
		images: []
	},
	urlRoot: '/api/v1/rental',
	idAttribute: 'id'
});