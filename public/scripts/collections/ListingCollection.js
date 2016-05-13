import Backbone from 'backbone';
import Listing from './../models/ListingModel.js';

const ListingCollection = Backbone.Collection.extend({
	model: Listing,
	url: '/api/v1/listing'
});

export default new ListingCollection();
