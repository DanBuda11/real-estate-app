require('./Listing');

module.exports = bookshelf.model('Photo', {
	tableName: 'photos',
	hasTimestamps: ['createdAt', 'updatedAt', 'deletedAt'],
	listing: function() {
		return this.belongsTo('Listing', 'listingId');
	}
});

