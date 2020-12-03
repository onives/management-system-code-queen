let mongoose = require('mongoose');
let validator = require('validator');
let bcrypt = require('bcryptjs');
let jwt = require('jsonwebtoken');

const AdminSchema = mongoose.Schema({
    fullName: {
        type: String,
        required: true,
        trim: true
    },
    phoneNumber: {
        type: Number,
        required: true
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
    created_at: {
        type: Date,
        default: Date.now
    }
});

AdminSchema.pre('save', async function(next){
    //hash passwords before saving them
    const admin = this
    if(admin.isModified('password')){
        admin.password = await bcrypt.hash(admin.password, 8)
    }
    next()
});

AdminSchema.methods.generateAuthToken = async function(){
    //generate an auth token for admin
    const admin = this
    const token = jwt.sign({_id: admin_id}, process.env.JWT_KEY)
    admin.tokens = admin.tokens.concat({token})
    await admin.save()
    return token
};

AdminSchema.statics.findByCredentials = async (email, password) =>{
    //search for admin by email
    const admin = await Admin.findOne({email})
    if(!admin){
        throw new Error({error: 'Invalid Login Credentials'})
    }
    const isPasswordMatch = await bcrypt.compare(password, admin.password)
    if(!isPasswordMatch){
        throw new Error ({error: 'Invalid Login credentials'})
    }
    return admin
}

var Admin = module.exports = mongoose.model("Admin", AdminSchema);

module.exports.get = function(callback, limit){
    Admin.find(callback).limit(limit);
} 