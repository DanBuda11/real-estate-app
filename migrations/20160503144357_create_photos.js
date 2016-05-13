exports.up = function(knex, Promise) {
  	return knex.schema.createTable('photos', function(t) {
  		t.increments('id').unsigned().primary();
  		t.dateTime('createdAt').notNull();
		t.dateTime('updatedAt').nullable();
		t.dateTime('deletedAt').nullable();
		t.string('url').nullable();
		t.integer('listingId')
			.unsigned()
			.notNull()
			.references('id')
			.inTable('listings')
			.onDelete('CASCADE');
  	});
};

exports.down = function(knex, Promise) {
  	return knex.schema.dropTable('photos');
};	