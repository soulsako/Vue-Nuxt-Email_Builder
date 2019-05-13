const mongoose = require('mongoose');

const preparedMailersSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  fascia_id: String,
  template_id: String,
  template_category: String,
  mailer_name: String,
  mailer_json_data: String,
  status: String,
  createdBy: String,
  createdOn: { type: Date, default: Date.now },
}, { versionKey: false });
module.exports = mongoose.model('preparedMailers', preparedMailersSchema);
