require('./Rental');

module.exports = bookshelf.model('RentalPhoto', {
	tableName: 'rental-photos',
	hasTimestamps: ['createdAt', 'updatedAt', 'deletedAt'],
	user: function() {
		return this.belongsTo('Rental', 'rentalId');
	}
});