import Backbone from 'backbone';

export default Backbone.Model.extend({
	defaults:{
		createdAt: null,
		updatedAt: null,
		deletedAt: null,
		url: '',
		listingId: ''
	},
	urlRoot: '/api/v1/photo',
	url: function() {
		let urlSuffix = `/${this[this.idAttribute]}?withRelated[0]=listing`;
		if (this[this.idAttribute]) {
			return `${this.urlRoot}${urlSuffix}`;
		} else {
			return `${this.urlRoot}`;
		}
	},
	idAttribute: 'id'
});