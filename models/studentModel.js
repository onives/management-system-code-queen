let mongoose = require('mongoose');
let validator = require('validator');
let bcrypt = require('bcryptjs');
let jwt = require('jsonwebtoken');

const StudentSchema = mongoose.Schema({
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
        required: true,
        trim: true
    },
    occupation: {
        type: String,
        trim: true
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

StudentSchema.pre('save', async function(next){
    //hash passwords before saving them
    const student = this
    if(student.isModified('password')){
        student.password = await bcrypt.hash(student.password, 8)
    }
    next()
});

StudentSchema.methods.generateAuthToken = async function(){
    //generate an auth token for admin
    const student = this
    const token = jwt.sign({_id: student_id}, process.env.JWT_KEY)
    student.tokens = student.tokens.concat({token})
    await student.save()
    return token
};

StudentSchema.statics.findByCredentials = async (email, password) =>{
    //search for admin by email
    const student = await Admin.findOne({email})
    if(!student){
        throw new Error({error: 'Invalid Login Credentials'})
    }
    const isPasswordMatch = await bcrypt.compare(password, student.password)
    if(!isPasswordMatch){
        throw new Error ({error: 'Invalid Login credentials'})
    }
    return student
}

var Student = module.exports = mongoose.model("Student", StudentSchema);

module.exports.get = function(callback, limit){
    Student.find(callback).limit(limit);
}