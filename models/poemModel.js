const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var PoemSchema = new Schema({
	title: String,
	poem: String,
	Author:String


});






const db = mongoose.model('Poem',PoemSchema);
module.exports = db;