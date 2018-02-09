var mongoose = require('mongoose');

var logSchema = new mongoose.Schema({
    _id :String,
	hostname : String,
	startTime : { type: Date, default: Date.now },
	startTimeLocal : String,
	cmdLine : Object,
	pid : Number,
	buildinfo : Object
});


var Log = module.exports = mongoose.model('Log', logSchema);

module.exports.getLogs = function (callback, limit) {
    Log.find(callback).limit(limit);
}
