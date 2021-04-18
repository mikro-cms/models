const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  'theme_path': String,
  'theme_info': String,
  'theme_path_options': String,
  'theme_view': String,
  'theme_public': String,
  'theme_public_url': String,
  'theme_name': String,
  'theme_version': String,
  'theme_url': String,
  'theme_author': String
});

module.exports = mongoose.model('theme', schema, 'themes');
