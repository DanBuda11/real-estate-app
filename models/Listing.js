require('./User');
require('./ListingPhoto');

module.exports = bookshelf.model('Listing', {
	tableName: 'listings',
	hasTimestamps: ['createdAt', 'updatedAt', 'deletedAt'],
	user: function() {
		return this.belongsTo('User', 'userId');
	},
	images: function() {
		return this.hasMany('ListingPhoto', 'listingId');
	}
});