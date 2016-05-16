
exports.seed = function(knex, Promise) {
	
	let createdAt = new Date();
	
	return knex('users').del().then(() => {
		return Promise.join(
			// Inserts seed entries
    		knex('users').insert({
    			createdAt: createdAt,
    			firstName: ,
    			lastName: ,
    			phone: ,
    			email: ,
    			bio: ,
    			image: ,
    			facebook: ,
    			twitter: ,
    			linkedin: 
    		}),
    		knex('users').insert({
    			createdAt: createdAt,
    			firstName: ,
    			lastName: ,
    			phone: ,
    			email: ,
    			bio: ,
    			image: ,
    			facebook: ,
    			twitter: ,
    			linkedin: 
    		}),
    		knex('users').insert({
    			createdAt: createdAt,
    			firstName: ,
    			lastName: ,
    			phone: ,
    			email: ,
    			bio: ,
    			image: ,
    			facebook: ,
    			twitter: ,
    			linkedin: 
    		}),
    		knex('users').insert({
    			createdAt: createdAt,
    			firstName: ,
    			lastName: ,
    			phone: ,
    			email: ,
    			bio: ,
    			image: ,
    			facebook: ,
    			twitter: ,
    			linkedin: 
    		}),
    		knex('users').insert({
    			createdAt: createdAt,
    			firstName: ,
    			lastName: ,
    			phone: ,
    			email: ,
    			bio: ,
    			image: ,
    			facebook: ,
    			twitter: ,
    			linkedin: 
    		}),
    		knex('users').insert({
    			createdAt: createdAt,
    			firstName: ,
    			lastName: ,
    			phone: ,
    			email: ,
    			bio: ,
    			image: ,
    			facebook: ,
    			twitter: ,
    			linkedin: 
    		}),
    		knex('users').insert({
    			createdAt: createdAt,
    			firstName: ,
    			lastName: ,
    			phone: ,
    			email: ,
    			bio: ,
    			image: ,
    			facebook: ,
    			twitter: ,
    			linkedin: 
    		}),
    		knex('users').insert({
    			createdAt: createdAt,
    			firstName: ,
    			lastName: ,
    			phone: ,
    			email: ,
    			bio: ,
    			image: ,
    			facebook: ,
    			twitter: ,
    			linkedin: 
    		}),
    		knex('users').insert({
    			createdAt: createdAt,
    			firstName: ,
    			lastName: ,
    			phone: ,
    			email: ,
    			bio: ,
    			image: ,
    			facebook: ,
    			twitter: ,
    			linkedin: 
    		}),
    		knex('users').insert({
    			createdAt: createdAt,
    			firstName: ,
    			lastName: ,
    			phone: ,
    			email: ,
    			bio: ,
    			image: ,
    			facebook: ,
    			twitter: ,
    			linkedin: 
    		})
  		);
	});
};