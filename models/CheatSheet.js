const mongoose = require('../db/connection')

const CheatSheetSchema = new mongoose.Schema({
	title: {type: String, required: true},
	subject: {type: String, required: true},
  body: {}
});

const CheatSheet = mongoose.model('CheatSheet', CheatSheetSchema);

module.exports = CheatSheet;
