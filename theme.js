const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  'theme_name': String,
  'theme_version': String,
  'theme_author': String,
  'theme_url': String,
  'theme_path': String,
  'theme_info': String,
  'theme_options': String,
  'theme_locale': { type: String, default: null },
  'theme_view': String,
  'theme_customize': { type: String, default: null },
  'theme_public_path': String,
  'theme_public_url': String,
  'theme_components': { type: Object, default: [] }
}, {
  autoCreate: true,
  minimize: false
});

module.exports = mongoose.model('theme', schema, 'themes');
