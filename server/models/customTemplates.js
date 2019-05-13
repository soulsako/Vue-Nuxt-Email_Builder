const mongoose = require('mongoose');

const customTemplatesSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  mailerName: String,
  content: String,
  status: String,
  createdBy: String,
  createdOn: { type: Date, default: Date.now },
}, { versionKey: false });
module.exports = mongoose.model('customTemplates', customTemplatesSchema);
