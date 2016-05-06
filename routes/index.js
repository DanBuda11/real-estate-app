let express = require('express');
let router = express.Router();

let loggedIn = require('../lib/middleware/logged-in');
// let NotificationService = require('../lib/notification')([
// 	{
// 		pattern: 'forgot-password/:id',
// 		handler: 'forgot-password'
// 	}
// ], path.join(config.rootPath, 'views', 'notifications'));

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', {
		user: req.user
	});
});

module.exports = router;
