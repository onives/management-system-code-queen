let mongoose = require('mongoose');
// let validator = require('validator');

const MentorSchema = mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: Number,
        required: true
    },
    sex: {
        type: String,
        required: true
    },
    occupation: {
        type: String,
    },
    email: {
        type: String,
        required: true
    },
    profilePicture: Buffer,
    created: {
        type: Date,
        default: Date.now
    }
});

var Mentor = module.exports = mongoose.model("Mentor", MentorSchema);

module.exports.get = function(callback, limit){
    Mentor.find(callback).limit(limit);
}