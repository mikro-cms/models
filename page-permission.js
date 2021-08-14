const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  'page': { type: mongoose.Types.ObjectId, ref: 'page' },
  'role': { type: mongoose.Types.ObjectId, ref: 'role', default: null },
  'role_group': String
}, {
  autoCreate: true
});

module.exports = mongoose.model('page_permission', schema, 'page_permissions');
