const mongoose = require('mongoose');

const curdActionsSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  action_name: String,
  status: String,
  createdBy: String,
  createdOn: { type: Date, default: Date.now },
}, { versionKey: false });
module.exports = mongoose.model('curdActions', curdActionsSchema);
