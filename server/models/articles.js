var keystone = require('keystone');
var Types = keystone.Field.Types;
var path = require('path');

// Create a new Keystone list called Recipe
var Article = new keystone.List('Article', {
  autokey: { path: 'slug', from: 'name', unique: true },
  defaultSort: '-createdAt',
});

// Adding the option to add an image to our Recipe from 
var articleImgStorage = new keystone.Storage({
  adapter: keystone.Storage.Adapters.FS,
  fs: {
     // required; path where the files should be stored
    path: keystone.expandPath('server/public/img'),
    generateFilename: function (file, index) {
      return file.originalname;
    },
    whenExists: 'error',
     // path where files will be served
    publicPath: '/public/img',
  },
});

// Finally we are gonna add the fields for our Recipe
Article.add({
  name: { 
    type: String, 
    required: true },
  state: { 
    type: Types.Select, 
    options: 'draft, published, archived', 
    default: 'draft' },
  author: { 
    type: Types.Relationship, 
    ref: 'UserCMS' 
  },
  createdAt: { 
    type: Date, 
    default: Date.now },
  publishedAt: Date,
  image: {
    type: Types.File,
    storage: articleImgStorage,
    mimetype: '.jpeg, .jpg, .gif, .svg',
  },
//   PostSummary: { 
//     type: Types.Html, 
//     wysiwyg: true, 
//     height: 150 
//   },
  Post: {
    type: Types.Html,
    wysiwyg: true,
    height: 500
  }
});

// Setting the default order of the columns on the admin tab
Article.defaultColumns = 'name, state|20%, author, publishedAt|15%';
Article.register();