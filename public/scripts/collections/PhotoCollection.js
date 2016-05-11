import Backbone from 'backbone';
import Photo from './../models/PhotoModel';

const PhotoCollection = Backbone.Collection.extend({
	model: Photo,
	url: 'api/v1/listingphoto'
});

export default new PhotoCollection();