require('./Rental');

module.exports = bookshelf.model('RentalPhoto', {
	tableName: 'rental-photos',
	hasTimestamps: ['createdAt', 'updatedAt', 'deletedAt'],
	rental: function() {
		return this.belongsTo('Rental', 'rentalId');
	}
});