const mongoose = require('mongoose');

const rolewiseMenuAccessSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  role_id: Number,
  menu_access: String,
  status: String,
  createdBy: String,
  createdOn: { type: Date, default: Date.now },
}, { versionKey: false });
module.exports = mongoose.model('rolewiseMenuAccess', rolewiseMenuAccessSchema);
