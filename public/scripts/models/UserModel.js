import Backbone from 'backbone';

export default Backbone.Model.extend({
	defaults:{
		createdAt: null,
		updatedAt: null,
		deletedAt: null,
		firstName: '',
		lastName: '',
		phone: '',
		email: '',
		bio: '',
		photo: ''
	},
	urlRoot: '/api/v1/user',
	url: function() {
		let urlSuffix = `/${this[this.idAttribute]}`;
		if(this[this.idAttribute]) {
			return `${this.urlRoot}${urlSuffix}`;
		} else {
			return `${this.urlRoot}`;
		}
	},
	idAttribute: 'id'
});