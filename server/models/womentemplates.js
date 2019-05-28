const mongoose = require('mongoose');

const womenTemplatesSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  template_type: String,
  templates: Array,
  status: String,
  background_color: String, 
  icon: String,
  createdOn: { type: Date, default: Date.now },
}, { versionKey: false });

module.exports = mongoose.model('womentemplates', womenTemplatesSchema);
