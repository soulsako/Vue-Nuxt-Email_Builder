const mongoose = require('mongoose');

const fasciasTemplatesSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  fascia_id: String,
  components: Array,
  header_html: String,
  footer_html: String,
  category: String,
  usp_url: String,
  usp_html: String,
  usp_image_link: String,
  usp_text: String,
  usp_category: String,
  usp_text_color: String,
  usp_back_color: String,
  top_spots: [],
  top_spots_html: String,
  bottom_spots: [],
  bottom_spots_html: String,
  custom_template_html: String,
  custom_template_content: String,
  status: String,
  createdBy: String,
  createdOn: { type: Date, default: Date.now },
}, { versionKey: false });
module.exports = mongoose.model('templates', fasciasTemplatesSchema);
