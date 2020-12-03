//intitialize express router
let router = require('express').Router();
//import controllers
let { createAlumni, fetchAllAlumni, updateAlumni} = require("../controllers/alumniControllers");
let createAdmin = require('../controllers/adminControllers');
let { createStudent, fetchAllStudents, deleteStudent, updateStudent } = require("../controllers/studentControllers");
let { createMentor, fetchAllMentors, deleteMentor, updateMentor } = require("../controllers/mentorController");

//set default API response
router.get('/', function(req, res){
    res.json({
        status: 'API works',
        message: 'welcome to first API'
    });
});

//set up routes for alumni
router.post("/alumni", createAlumni);
router.get("/alumni", fetchAllAlumni);
router.patch("/alumni/:id", updateAlumni);

//routes for admin
router.post("/admin", createAdmin);

//routes for student
router.post("/students", createStudent);
router.get("/students", fetchAllStudents);
router.patch("/students/:id", updateStudent);
router.delete("/students/:id", deleteStudent);

//routes for mentor
router.post("/mentors", createMentor);
router.get("/mentors", fetchAllMentors);
router.delete("/mentors/:id", deleteMentor);
router.patch("/mentors/:id", updateMentor);

//export API routes
module.exports = router;