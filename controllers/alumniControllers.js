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


module.exports = { createAlumni, fetchAllAlumni, updateAlumni };
