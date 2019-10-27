const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const citySchema = new Schema({
	city: {
		type: String,
		required: true,
		unique: true
	},
	subtitle: {
		type: String,
		required: true,
		unique: true
	},
	image: {
		type: String
	}
},{
	timestamps: true
});

var Cities = mongoose.model('City', citySchema);

module.exports = Cities;