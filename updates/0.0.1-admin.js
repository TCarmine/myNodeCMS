var keystone = require('keystone');
var UserCMS = keystone.list('UserCMS');

exports = module.exports = function (done) {
	new UserCMS.model({
		name: { first: 'admin', last: 'userAdmin' },
		email: 'carmine.tambascia@gmail.com',
		password: 'admin',
		canAccessKeystone: true,
	}).save(done);

};


