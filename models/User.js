require('./Authentication');
require('./Listing');
require('./Rental');
module.exports = bookshelf.model('User', {
	tableName: 'users',
	hasTimestamps: ['createdAt', 'updatedAt', 'deletedAt'],
	authentication: function() {
		return this.hasMany('Authentication', 'userId');
	},
	listing: function() {
		return this.hasMany('Listing', 'userId');
	},
	rental: function() {
		return this.hasMany('Rental', 'userId');
	}
});