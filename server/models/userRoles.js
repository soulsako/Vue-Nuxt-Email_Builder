const mongoose = require('mongoose');

const userRolesSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  emp_id: String,
  role_id: String,
  status: String,
  createdBy: String,
  createdOn: { type: Date, default: Date.now },
}, { versionKey: false });

module.exports = mongoose.model('userRoles', userRolesSchema);
