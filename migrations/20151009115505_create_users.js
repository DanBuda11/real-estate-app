exports.up = function(knex, Promise) {
	return knex.schema.createTable('users', function(t) {
		t.increments('id').unsigned().primary();
		t.dateTime('createdAt').notNull();
		t.dateTime('updatedAt').nullable();
		t.dateTime('deletedAt').nullable();
		t.string('firstName').notNull();
		t.string('lastName').notNull();
		t.string('phone').notNull();
		t.string('email').notNull();
		t.string('bio', 500).nullable().defaultTo('This User has not entered a bio.');
		t.string('image').nullable();
		t.string('facebook').nullable();
		t.string('twitter').nullable();
		t.string('linkedin').nullable();
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTable('users');
};
