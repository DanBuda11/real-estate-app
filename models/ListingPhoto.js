require('./Listing');

module.exports = bookshelf.model('ListingPhoto', {
	tableName: 'listing-photos',
	hasTimestamps: ['createdAt', 'updatedAt', 'deletedAt'],
	listing: function() {
		return this.belongsTo('Listing', 'listingId');
	}
});