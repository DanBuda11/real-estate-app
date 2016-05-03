require('./Authentication');
require('./Listing');
require('./Rental');
module.exports = bookshelf.model('User', {
	tableName: 'users',
	hasTimestamps: ['createdAt', 'updatedAt', 'deletedAt'],
	authentication: function() {
		this.hasMany('Authentication', 'userId');
	},
	listing: function() {
		this.hasMany('Listing', 'userId');
	},
	rental: function() {
		this.hasMany('Rental', 'userId');
	}
});