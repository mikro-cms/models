const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  'component_name': String,
  'component_options': Object,
  'page': { type: mongoose.Schema.Types.ObjectId, ref: 'page', default: null },
}, {
  autoCreate: true,
  minimize: false
});

module.exports = mongoose.model('component', schema, 'components');
