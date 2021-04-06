const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  'post': { type: mongoose.Types.ObjectId, ref: 'post' },
  'label': { type: mongoose.Types.ObjectId, ref: 'label' }
});

module.exports = mongoose.model('post_label', schema, 'post_labels');
