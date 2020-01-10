// basic boilerplate
let keystone = require('keystone');
let Types = keystone.Field.Types;

// The User would conflict with others app name on compiling time
let UserCMS = new keystone.List('UserCMS');

// Then we gonna add the fields 
UserCMS.add({
  name: { type: Types.Name, required: true, index: true },
  email: { type: Types.Email, initial: true, required: true, index: true },
  password: { type: Types.Password, initial: true },
  canAccessKeystone: { type: Boolean, initial: true },
});

UserCMS.register();