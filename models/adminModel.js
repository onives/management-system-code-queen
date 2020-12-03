let mongoose = require('mongoose');
// let validator = require('validator');

const AdminSchema = mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});

var Admin = module.exports = mongoose.model("Admin", AdminSchema);

module.exports.get = function(callback, limit){
    Admin.find(callback).limit(limit);
}