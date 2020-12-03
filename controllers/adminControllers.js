//importing the mentor model
let Admin = require('../models/adminModel');

//create a new mentor in database
const createAdmin = async (req, res) =>{
    const { body } = req;
    const admin = new Admin(body);
    await admin.save();
    return res.status(201).send(admin)
};

module.exports = createAdmin;
