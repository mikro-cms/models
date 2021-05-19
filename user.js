const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  'created_at': { type: Number, default: Date.now },
  'created_by': { type: mongoose.Schema.Types.ObjectId, ref: 'user', default: null },
  'updated_at': { type: Number, default: null },
  'updated_by': { type: mongoose.Schema.Types.ObjectId, ref: 'user', default: null },
  'deleted_at': { type: Number, default: null },
  'deleted_by': { type: mongoose.Schema.Types.ObjectId, ref: 'user', default: null },
  'user_fullname': String,
  'user_email': String,
  'user_username': String,
  'user_password': String,
  'role': { type: mongoose.Schema.Types.ObjectId, ref: 'role' }
}, {
  autoCreate: true
});

module.exports = mongoose.model('user', schema, 'users');
