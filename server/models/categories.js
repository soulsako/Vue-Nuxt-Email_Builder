const mongoose = require('mongoose');

const categorylistSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  categoryName: String,
  status: String,
  createdOn: { type: Date, default: Date.now },
}, { versionKey: false });

module.exports = mongoose.model('categories', categorylistSchema);
