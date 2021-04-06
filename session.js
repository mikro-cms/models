const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  'created': { type: Number, default: Date.now },
  'expired': { type: Number },
  'device': String,
  'ip': String,
  'token': String,
  'user': { type: mongoose.Schema.Types.ObjectId, ref: 'user' }
});

module.exports = mongoose.model('session', schema, 'sessions');
