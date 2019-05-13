const mongoose = require('mongoose');

const usersSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  fullName: String,
  email: String,
  role_id: Number,
  fascias: [],
  status: String,
  createdBy: String,
  createdOn: { type: Date, default: Date.now },
}, { versionKey: false });

module.exports = mongoose.model('users', usersSchema);
