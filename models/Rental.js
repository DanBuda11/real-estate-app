require('./User');
require('./RentalPhoto');

module.exports = bookshelf.model('Rental', {
	tableName: 'rentals',
	hasTimestamps: ['createdAt', 'updatedAt', 'deletedAt'],
	user: function() {
		return this.belongsTo('User', 'userId');
	},
	images: function() {
		return this.hasMany('RentalPhoto', 'rentalId');
	}
});