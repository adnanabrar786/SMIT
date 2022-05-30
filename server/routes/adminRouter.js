const express = require("express");

const router = express.Router();

const adminControler = require("../controllers/adminCotroler");
const coursesControllers = require("../controllers/coursesControllers");
const studentController = require("../controllers/studentController")


router
     .route("/")
     .post(adminControler.login);

router
     .route("/addadmin")
     .get(adminControler.getalladmin)
     .post(adminControler.addadmin)


router
     .route("/resetpassword/:id")
     .put(adminControler.resetPassword);
//   .delete(controller.deletealladmin)

router
     .route("/courses")
     .get(coursesControllers.getallcourses)
     .post(coursesControllers.addcourses)

router
     .route("/courses/:id")
     .put(coursesControllers.updateCoursesData)

router
     .route("/addstudent")
     // .get(coursesControllers.getallcourses)
     //  excel file Fetch Data
     .post(studentController.addStudents)

module.exports = router;