//importing the mentor model
let Alumni = require('../models/alumniModel');

//create a new mentor in database
const createAlumni = async (req, res) =>{
    const { body } = req;
    const alumnus = new Alumni(body);
    await alumnus.save();
    return res.status(201).send(alumnus)
};

//fetch all mentors
const fetchAllAlumni = async(req, res) =>{
    const alumni = await Alumni.find({});
    return res.status(200).send(alumni);
};

//update alumni
const updateAlumni = async (req, res) => {
    const { id } = req.params;
    const updatedAlumni = await Alumni.findById(id);
    if (!updatedAlumni) {
      return res
        .status(404)
        .send({ error: "The alumnui you are searching for was not found." });
    }
    
    await updatedAlumni.save();
    return res.status(200).send({
      message: "Alumni updated successfully!",
      data: updatedAlumni,
    });
};

//login registered alumni

const loginAlumni = async (req, res) =>{
  try{
      const {email, password} = req.body;
      const alumni = await Alumni.findByCreditials(email, password);
      if(!alumni){
          return res.status(401).send({error: "Login failed. Check authentication credentials"})
      }
      const token = await Alumni.generateAuthToken();
      res.send({alumni, token});
  } catch(error) {
      res.status(400).send(error);
  }
};


module.exports = { createAlumni, fetchAllAlumni, updateAlumni, loginAlumni };
