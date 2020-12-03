//importing the admin model
let Admin = require('../models/adminModel');

//create a new admin in database
const createAdmin = async (req, res) =>{
    try{
        const { body } = req.body;
        const admin = new Admin(body);
        await admin.save();
        const token = await admin.generateAuthToken();
        return res.status(201).send({admin, token})

    } catch (error) {
        res.status(400).send(error);
    }
    
};

//login registered admin

const loginAdmin = async (req, res) =>{
    try{
        const {email, password} = req.body;
        const admin = await Admin.findByCreditials(email, password);
        if(!admin){
            return res.status(401).send({error: "Login failed. Check authentication credentials"})
        }
        const token = await Admin.generateAuthToken();
        res.send({admin, token});
    } catch(error) {
        res.status(400).send(error);
    }
};

module.exports = { createAdmin, loginAdmin };
