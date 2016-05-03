require('./User');
module.exports = bookshelf.model('Listing', {
	tableName: 'listings',
	hasTimestamps: ['createdAt', 'updatedAt', 'deletedAt'],
	user: function() {
		return this.belongsTo('User', 'userId');
	}
});