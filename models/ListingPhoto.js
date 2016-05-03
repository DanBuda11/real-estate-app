require('./Listing');

module.exports = bookshelf.model('ListingPhoto', {
	tableName: 'listing-photos',
	hasTimestamps: ['createdAt', 'updatedAt', 'deletedAt'],
	user: function() {
		return this.belongsTo('Listing', 'listingId');
	}
});