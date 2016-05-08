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
		images: [],
		user: {}
	},
	urlRoot: '/api/v1/rental',
	url: function() {
		return `${this.urlRoot}/${this[this.idAttribute]}?withRelated[0]=user`;
	},
	idAttribute: 'id'
});