const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  'created_at': { type: Number, default: Date.now },
  'created_by': { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
  'updated_at': { type: Number, default: null },
  'updated_by': { type: mongoose.Schema.Types.ObjectId, ref: 'user', default: null },
  'deleted_at': { type: Number, default: null },
  'deleted_by': { type: mongoose.Schema.Types.ObjectId, ref: 'user', default: null },
  'api_name': String,
  'api_version': String,
  'api_author': String,
  'api_url': String,
  'api_path': String,
  'api_info': String,
  'api_options': String,
  'api_locale': { type: String, default: null },
  'api_resource': String,
  'api_upload': { type: Object, default: [] }
}, {
  autoCreate: true,
  minimize: true
});

module.exports = mongoose.model('api', schema, 'apis');
