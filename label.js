const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  'created_at': { type: Number, default: Date.now },
  'created_by': { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
  'updated_at': { type: Number, default: null },
  'updated_by': { type: mongoose.Schema.Types.ObjectId, ref: 'user', default: null },
  'deleted_at': { type: Number, default: null },
  'deleted_by': { type: mongoose.Schema.Types.ObjectId, ref: 'user', default: null },
  'label_name': String
});

module.exports = mongoose.model('label', schema, 'labels');
