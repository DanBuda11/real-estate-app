exports.up = function(knex, Promise) {
  	return knex.schema.createTable('listings', function(t) {
  		t.increments('id').unsigned().primary();
  		t.dateTime('createdAt').notNull();
		t.dateTime('updatedAt').nullable();
		t.dateTime('deletedAt').nullable();
		t.string('rentSale').notNull().defaultTo('For Sale');
		t.string('address').nullable();
		t.string('price').unsigned().nullable();
		t.integer('beds').unsigned().nullable();
		t.decimal('baths', 2, 1).unsigned().nullable();
		t.integer('sqft').unsigned().nullable();
		t.decimal('acres', 3, 2).unsigned().nullable();
		t.string('type').nullable();
		t.integer('stories').unsigned().nullable();
		t.integer('year').unsigned().nullable();
		t.string('blurb', 500).nullable().defaultTo('This listing has no description.');
		t.integer('userId')
			.unsigned()
			.notNull()
			.references('id')
			.inTable('users')
			.onDelete('CASCADE');
  	});
};

exports.down = function(knex, Promise) {
  	return knex.schema.dropTable('listings');
};
