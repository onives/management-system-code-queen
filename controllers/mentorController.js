//importing the mentor model
let Mentor = require('../models/mentorModel');

//create a new mentor in database
const createMentor = async (req, res) =>{
    const { body } = req.body;
    const mentor = new Mentor(body);
    await mentor.save();
    return res.status(201).send(mentor)
};

//fetch all mentors
const fetchAllMentors = async(req, res) =>{
    const mentors = await Mentor.find({});
    return res.status(200).send(mentors);
};

//delete mentor from database 
const deleteMentor = async(req, res) =>{
    const { id } = req.params;
    const mentor = await Mentor.findById(id);
    if(!mentor){
       return res
       .status(404) 
       .send({error: 'The Mentor you are searching for was not found'});
    }
    await mentor.deleteOne(mentor);
    return res
    .status(200)
    .send({message: `Mentor ${mentor.fullName} has been sucessfully deleted`})
};

//update mentor information
const updateMentor = async (req, res) => {
    const { id } = req.params;
    const updatedMentor = await Mentor.findById(id);
    if (!updatedMentor) {
      return res
        .status(404)
        .send({ error: "The Mentor you are searching for was not found." });
    }
    
    await updatedMentor.save();
    return res.status(200).send({
      message: "Mentor updated successfully!",
      data: updatedMentor,
    });
};

module.exports = { createMentor, fetchAllMentors, deleteMentor, updateMentor };

