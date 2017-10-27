var mongoose = require('mongoose');

var UserSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    gender: String,
    address: String,
    birthdate: String
}, {
    timestamps: true
});

module.exports = mongoose.model('User', UserSchema);