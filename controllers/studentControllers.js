//importing the mentor model
let Student = require('../models/studentModel');

//create a new mentor in database
const createStudent = async (req, res) =>{
    const { body } = req.body;
    const student = new Alumni(body);
    await student.save();
    return res.status(201).send(student)
};

//fetch all mentors
const fetchAllStudents = async(req, res) =>{
    const students = await Student.find({});
    return res.status(200).send(students);
};

//delete student from database
const deleteStudent = async(req, res) =>{
    const { id } = req.params;
    const student = await Student.findById(id);
    if(!student){
       return res
       .status(404) 
       .send({error: 'The Student you are searching for was not found'});
    }
    await student.deleteOne(student);
    return res
    .status(200)
    .send({message: `Student ${student.fullName} has been sucessfully deleted`})
};
// Edit student information
const updateStudent = async (req, res) => {
    const { id } = req.params;
    const updatedStudent = await Student.findById(id);
    if (!updatedStudent) {
      return res
        .status(404)
        .send({ error: "The student you are searching for was not found." });
    }
    
    await updatedStudent.save();
    return res.status(200).send({
      message: "Student updated successfully!",
      data: updatedStudent,
    });
};


module.exports = { createStudent, fetchAllStudents, deleteStudent, updateStudent };
