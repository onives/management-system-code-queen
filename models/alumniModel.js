let mongoose = require('mongoose');
let validator = require('validator');
let bcrypt = require('bcryptjs');
let jwt = require('jsonwebtoken');

const AlumniSchema = mongoose.Schema({
    fullName: {
        type: String,
        required: true,
        trim: true
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
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        validate: value =>{
            if(!validator.isEmail(value)){
                throw new Error ({error: 'Invalid email address'})
            }
        }
    },
    password: {
        type: String,
        require: true,
        minLength: 7,
    },
    linedin:{
        type: String,
        validate:{
            validator: function(text){
                return text.indexOf('https://linkedin.com/')===0;
            },
            message: 'Linkedin must start with https://linkedin.com/ '
        }
    },
    profilePicture: Buffer,
    created_at: {
        type: Date,
        default: Date.now
    }

});

AlumniSchema.pre('save', async function(next){
    //hash passwords before saving them
    const alumni = this
    if(alumni.isModified('password')){
        alumni.password = await bcrypt.hash(alumni.password, 8)
    }
    next()
});

AlumniSchema.methods.generateAuthToken = async function(){
    //generate an auth token for admin
    const alumni = this
    const token = jwt.sign({_id: alumni_id}, process.env.JWT_KEY)
    aluni.tokens = alumni.tokens.concat({token})
    await alumi.save()
    return token
};

AlumniSchema.statics.findByCredentials = async (email, password) =>{
    //search for admin by email
    const alumni = await Admin.findOne({email})
    if(!alumni){
        throw new Error({error: 'Invalid Login Credentials'})
    }
    const isPasswordMatch = await bcrypt.compare(password, alumni.password)
    if(!isPasswordMatch){
        throw new Error ({error: 'Invalid Login credentials'})
    }
    return alumni
}

var Alumni = module.exports = mongoose.model("Alumni", AlumniSchema);

module.exports.get = function(callback, limit){
    Alumni.find(callback).limit(limit);
}