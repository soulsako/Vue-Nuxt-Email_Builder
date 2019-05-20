const mongoose = require('mongoose');

const menTemplatesSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  template_type: String,
  template1: Object,
  status: String,
  createdOn: { type: Date, default: Date.now },
}, { versionKey: false });

module.exports = mongoose.model('mentemplates', menTemplatesSchema);
