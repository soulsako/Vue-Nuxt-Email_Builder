const mongoose = require('mongoose');

const fasciasListSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  fascia_group_id: String,
  fasica_name: String,
  fascia_logo: String,
  status: String,
  createdBy: String,
  createdOn: { type: Date, default: Date.now },
}, { versionKey: false });
module.exports = mongoose.model('fascias', fasciasListSchema);
