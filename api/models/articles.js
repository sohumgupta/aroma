const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const articleSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	title: {
		type: String,
		required: true
	},
	city: {
		type: String,
		required: true
	},
	text: {
		type: String
	},
	image: {
		type: String
	},
	tags: [{
    	type: String
	}]
},{
	timestamps: true
});

var Articles = mongoose.model('Article', articleSchema);

module.exports = Articles;