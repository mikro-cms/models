const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  'role_name': String,
  'role_group': String
});

module.exports = mongoose.model('role', schema, 'roles');
