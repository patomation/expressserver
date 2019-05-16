var mongoose = require('mongoose');
// var Schema = mongoose.Schema;

// var UserSchema = new Schema({
var UserSchema = mongoose.Schema({
    username: String,
    password: String
});

// module.exports =  mongoose.model('User', UserSchema)
module.exports =  mongoose.model('User', UserSchema)
