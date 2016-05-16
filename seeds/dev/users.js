
exports.seed = function(knex, Promise) {
	
	let createdAt = new Date();
	
	return knex('users').del().then(() => {
		return Promise.join(
			// Inserts seed entries
    		knex('users').insert({
    			createdAt: createdAt,
    			firstName: 'Dan',
    			lastName: 'Buda',
    			phone: '512-663-1673',
    			email: 'danbuda@gmail.com',
    			bio: 'Dan has been involved in real estate since obtaining his real estate license in 2004, and has been an active investor since 2009. Prior to running his current real estate business, Dan spent six years at the Texas Capitol, ultimately serving as Chief of Staff to Senator Wendy Davis.',
    			image: 'https://cdn.filepicker.io/api/file/5pcYKA9RrOmXbGRPtkwe',
    			facebook: 'https://www.facebook.com/DanBudaRealtor/',
    			twitter: 'https://twitter.com/danielbuda',
    			linkedin: 'https://www.linkedin.com/in/danbuda'
    		}),
    		knex('users').insert({
    			createdAt: createdAt,
    			firstName: 'Bob',
    			lastName: 'Newhart',
    			phone: '512-555-5555',
    			email: 'bob@newhart.com',
    			bio: 'Cras non dolor. Nullam cursus lacinia erat. In hac habitasse platea dictumst. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Vestibulum facilisis, purus nec pulvinar iaculis, ligula mi congue nunc, vitae euismod ligula urna in dolor.',
    			image: 'https://cdn.filepicker.io/api/file/zR4o0omQaqg54e4Mdy4g',
    			facebook: 'https://www.facebook.com/Bob-Newhart-147547279204/',
    			twitter: '',
    			linkedin: ''
    		}),
    		knex('users').insert({
    			createdAt: createdAt,
    			firstName: 'Andy',
    			lastName: 'Samberg',
    			phone: '212-555-5555',
    			email: 'andy@samberg.com',
    			bio: 'Curabitur at lacus ac velit ornare lobortis. Curabitur turpis. Proin magna. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    			image: 'https://cdn.filepicker.io/api/file/igZ6xPiETaq9aRRtLeZq',
    			facebook: 'https://www.facebook.com/pages/Andy-Samberg/108240575863415?fref=ts',
    			twitter: 'https://twitter.com/AndySamberg',
    			linkedin: ''
    		}),
    		knex('users').insert({
    			createdAt: createdAt,
    			firstName: 'Bobby',
    			lastName: 'Noface',
    			phone: '555-555-5555',
    			email: 'bnoface@nofaceco.com',
    			bio: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Vivamus in erat ut urna cursus vestibulum. Nulla consequat massa quis enim. Fusce neque.',
    			image: '',
    			facebook: '',
    			twitter: '',
    			linkedin: ''
    		}),
    		knex('users').insert({
    			createdAt: createdAt,
    			firstName: 'Dolph',
    			lastName: 'Lundgren',
    			phone: '555-555-5555',
    			email: 'dl@lundgren.com',
    			bio: 'Sed augue ipsum, egestas nec, vestibulum et, malesuada adipiscing, dui. Fusce fermentum. Donec posuere vulputate arcu. Praesent ac massa at ligula laoreet iaculis.',
    			image: 'https://cdn.filepicker.io/api/file/JocAEWxIT8myJE37OTr4',
    			facebook: 'https://www.facebook.com/DolphLundgrenOfficial/?fref=ts',
    			twitter: 'https://twitter.com/Dolph_Lundgren',
    			linkedin: ''
    		}),
    		knex('users').insert({
    			createdAt: createdAt,
    			firstName: 'Kermit',
    			lastName: 'Frog',
    			phone: '210-555-1234',
    			email: 'kermit@muppets.org',
    			bio: 'Sed augue ipsum, egestas nec, vestibulum et, malesuada adipiscing, dui. Fusce fermentum. Donec posuere vulputate arcu. Praesent ac massa at ligula laoreet iaculis.',
    			image: 'https://cdn.filepicker.io/api/file/f8TeGP7T3uFkRwyvUNCY',
    			facebook: '',
    			twitter: 'https://twitter.com/KermitTheFrog?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor',
    			linkedin: ''
    		}),
    		knex('users').insert({
    			createdAt: createdAt,
    			firstName: 'Gilbert',
    			lastName: 'Gottfried',
    			phone: '555-555-5555',
    			email: 'gg@gottfried.com',
    			bio: 'Sed augue ipsum, egestas nec, vestibulum et, malesuada adipiscing, dui. Fusce fermentum. Donec posuere vulputate arcu. Praesent ac massa at ligula laoreet iaculis.',
    			image: 'https://cdn.filepicker.io/api/file/L8Wna3tBTBGErOjbMY6g',
    			facebook: '',
    			twitter: 'https://twitter.com/RealGilbert',
    			linkedin: ''
    		}),
    		knex('users').insert({
    			createdAt: createdAt,
    			firstName: 'Matt',
    			lastName: 'Lauer',
    			phone: '212-555-5555',
    			email: 'mlauer@nbc.com',
    			bio: 'Sed augue ipsum, egestas nec, vestibulum et, malesuada adipiscing, dui. Fusce fermentum. Donec posuere vulputate arcu. Praesent ac massa at ligula laoreet iaculis.',
    			image: 'https://cdn.filepicker.io/api/file/83q0tTzQTiSegrOqPNrg',
    			facebook: '',
    			twitter: 'https://twitter.com/MLauer',
    			linkedin: ''
    		}),
    		knex('users').insert({
    			createdAt: createdAt,
    			firstName: 'Darth',
    			lastName: 'Vader',
    			phone: '555-555-5555',
    			email: 'darth@empire.biz',
    			bio: 'Sed augue ipsum, egestas nec, vestibulum et, malesuada adipiscing, dui. Fusce fermentum. Donec posuere vulputate arcu. Praesent ac massa at ligula laoreet iaculis.',
    			image: 'https://cdn.filepicker.io/api/file/W7UdBDLyTaes1PX1rqJA',
    			facebook: '',
    			twitter: 'https://twitter.com/darthvader',
    			linkedin: ''
    		}),
    		knex('users').insert({
    			createdAt: createdAt,
    			firstName: 'Jack',
    			lastName: 'Sparrow',
    			phone: '555-555-5555',
    			email: 'jack@pirates.org',
    			bio: 'Sed augue ipsum, egestas nec, vestibulum et, malesuada adipiscing, dui. Fusce fermentum. Donec posuere vulputate arcu. Praesent ac massa at ligula laoreet iaculis.',
    			image: 'https://cdn.filepicker.io/api/file/tMHwegz0QkirLhWUAA8r',
    			facebook: '',
    			twitter: '',
    			linkedin: ''
    		})
  		);
	});
};