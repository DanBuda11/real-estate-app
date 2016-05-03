require('./User');
module.exports = bookshelf.model('Rental', {
	tableName: 'rentals',
	hasTimestamps: ['createdAt', 'updatedAt', 'deletedAt'],
	user: function() {
		return this.belongsTo('User', 'userId');
	}
});