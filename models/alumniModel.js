let mongoose = require('mongoose');
// let validator = require('validator');

const AlumniSchema = mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: Number,
        required: true
    },
    status: {
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
    password: {
        type: String,
    },
    // linedin:{
    //     type: String,
    //     validate:{
    //         validator: function(text){
    //             return text.indexOf('https://linkedin.com/')===0;
    //         },
    //         message: 'Linkedin must start with https://linkedin.com/ '
    //     }
    // },
    profilePicture: Buffer,
    created_at: {
        type: Date,
        default: Date.now
    }

});

var Alumni = module.exports = mongoose.model("Alumni", AlumniSchema);

module.exports.get = function(callback, limit){
    Alumni.find(callback).limit(limit);
}