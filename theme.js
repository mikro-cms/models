const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  'theme_name': String,
  'theme_version': String,
  'theme_url': String,
  'theme_author': String
});

module.exports = mongoose.model('theme', schema, 'themes');
