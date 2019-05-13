const mongoose = require('mongoose');

const fasciaGroupsSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  group_name: String,
  group_logo: String,
  status: String,
  createdBy: String,
  createdOn: { type: Date, default: Date.now },
}, { versionKey: false });
module.exports = mongoose.model('fasciaGroups', fasciaGroupsSchema);
