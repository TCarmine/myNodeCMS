// This is the KeystoneJS configuration as "Settings" in Django
// This with yo generator is called keystone.js
// localhost:27017 default but can be checked with sudo lsof -iTCP -sTCP:LISTEN | grep mongo


//import keystone
let keystone = require('keystone');

// Set up our keystone instance
keystone.init({
  // The name of the KeystoneJS application
  'name': 'Keystone CMS',
  // Paths to our application static files
  'static': [ 
    './server/public/js/',
    './server/public/img/',
  ],
  // Keystone includeed updates framework, 
  // which can enabled by setting the auto update option to true.
  // Updates provide an easy way to seed your database, 
  // transition data when your models change, 
  // or run transformation scripts against your database.
  'auto update': true,
  // The url for your MongoDB connection
  'mongo': 'mongodb://localhost/mynodecms',
  // Whether to enable built-in authentication for Keystone's Admin UI,
  'auth': true,
  // The key of the Keystone List for users, required if auth is set to true
  'user model': 'UserCMS',
  // The encryption key to use for your cookies.
  'cookie secret': '6D61822FBEAED8635A4A52241FEC3',
});

// Load your project's Models
keystone.import('./server/models');

// register our routes
keystone.set('routes', require('./server/routes'));

// Start Keystone
keystone.start();