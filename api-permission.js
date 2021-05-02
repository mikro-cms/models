const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  'api': { type: mongoose.Types.ObjectId, ref: 'api' },
  'role': { type: mongoose.Types.ObjectId, ref: 'role', default: null },
  'role_group': String,
  'api_resource': String
}, {
  autoCreate: true
});

module.exports = mongoose.model('api_permission', schema, 'api_permissions');
