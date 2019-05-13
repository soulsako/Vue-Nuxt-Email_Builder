const mongoose = require('mongoose');

const rolesSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  roleId: Number,
  roleName: String,
  status: String,
  createdBy: String,
  createdOn: { type: Date, default: Date.now },
}, { versionKey: false });

module.exports = mongoose.model('roles', rolesSchema);
