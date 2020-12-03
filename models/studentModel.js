let mongoose = require('mongoose');
let validator = require('validator');
let bcrypt = require('bcryptjs');
let jwt = require('jsonwebtoken');

const StudentSchema = mongoose.Schema({
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
    cohort: {
        type: String,
        required: true
    },
    birthday: {
        type: String,
        required: true
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

var Student = module.exports = mongoose.model("Student", StudentSchema);

module.exports.get = function(callback, limit){
    Student.find(callback).limit(limit);
}