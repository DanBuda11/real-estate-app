import Backbone from 'backbone';

const UserModel =  Backbone.Model.extend({
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

export default new UserModel(window.user);