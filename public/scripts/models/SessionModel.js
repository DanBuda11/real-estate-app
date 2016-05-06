import Backbone from 'backbone';

const SessionModel = Backbone.Model.extend({
	defaults:{
		createdAt: null,
		updatedAt: null,
		deletedAt: null,
		firstName: '',
		lastName: '',
		phone: '',
		email: '',
		bio: '',
		image: ''
	},
	urlRoot: '/api/v1/user',
	idAttribute: 'id'
});

export default new SessionModel(window.user);