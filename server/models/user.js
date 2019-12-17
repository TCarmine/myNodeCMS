var keystone = require('keystone');
var Types = keystone.Field.Types;

// First we gonna create our User list
var UserCMS = new keystone.List('UserCMS');

// Then we gonna add the fields 
UserCMS.add({
  name: { type: Types.Name, required: true, index: true },
  email: { type: Types.Email, initial: true, required: true, index: true },
  password: { type: Types.Password, initial: true },
  canAccessKeystone: { type: Boolean, initial: true },
});

UserCMS.register();