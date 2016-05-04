import Backbone from 'backbone';
import Rental from './../models/RentalModel.js';

const RentalCollection = Backbone.Collection.extend({
	model: Rental,
	url: '/api/v1/rental'
});

export default new RentalCollection();