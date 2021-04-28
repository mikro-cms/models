const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  'api': { type: mongoose.Types.ObjectId, ref: 'api' },
  'role': { type: mongoose.Types.ObjectId, ref: 'role' },
  'role_group': String
}, {
  autoCreate: true
});

module.exports = mongoose.model('api_permission', schema, 'api_permissions');
