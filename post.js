const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  'created_at': { type: Number, default: Date.now },
  'created_by': { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
  'updated_at': { type: Number, default: null },
  'updated_by': { type: mongoose.Schema.Types.ObjectId, ref: 'user', default: null },
  'deleted_at': { type: Number, default: null },
  'deleted_by': { type: mongoose.Schema.Types.ObjectId, ref: 'user', default: null },
  'post_title': String,
  'post_content': String,
  'post_status': String,
  'post_options': { type: Object, default: {} },
  'label': { type: mongoose.Schema.Types.ObjectId, ref: 'label' }
}, {
  autoCreate: true,
  minimize: false
});

module.exports = mongoose.model('post', schema, 'posts');
