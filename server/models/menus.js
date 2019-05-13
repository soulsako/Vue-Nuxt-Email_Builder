const mongoose = require('mongoose');

const menusSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  parent_menu_id: String,
  menuId: String,
  menu_name: String,
  menu_description: String,
  menu_url: String,
  status: String,
  createdBy: String,
  createdOn: { type: Date, default: Date.now },
}, { versionKey: false });
module.exports = mongoose.model('menus', menusSchema);
