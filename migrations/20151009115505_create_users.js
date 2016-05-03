exports.up = function(knex, Promise) {
	return knex.schema.createTable('users', function(t) {
		t.increments('id').unsigned().primary();
		t.dateTime('createdAt').notNull();
		t.dateTime('updatedAt').nullable();
		t.dateTime('deletedAt').nullable();
		t.string('userName').notNull();
		t.string('firstName').notNull();
		t.string('lastName').notNull();
		t.integer('phone').notNull();
		t.string('email').notNull();
		t.string('bio', 500).nullable().defaultTo('This User has not entered a bio.');
		t.string('image').nullable();
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTable('users');
};
