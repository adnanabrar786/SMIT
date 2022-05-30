const coursesModal =  require("../modals/coursesModal")


exports.getallcourses = async (req, res, next) => {
  try {
    const getallcourses = await coursesModal.find({});
    res.send(getallcourses);
    if (getallcourses) {
      console.log(getallcourses);
      console.log("Courses List");
    } else {
      console.log("invalid");
    }
  } catch (e) {
    console.log(e);
  }
};


exports.addcourses = async (req, res, next) => {

//   {
//     "CompanyName" : "My Company" ,
//     "CourseName" : "Mobile Development" ,
//     "StartingDate" : "12 August" ,
//     "LastDate" : "20 August" ,
//     "Teacher" : "sir Ishaq Bhojani" 
// }
  
    const CompanyName = req.body.CompanyName
    const CourseName = req.body.CourseName
    const StartingDate = req.body.StartingDate
    const LastDate = req.body.LastDate
    const Teacher = req.body.Teacher
  
  
    try {
      const coursesAddData = await coursesModal({
        CompanyName: CompanyName,
        CourseName: CourseName,
        StartingDate: StartingDate,
        LastDate: LastDate,
        Teacher: Teacher
      });
   
      const result = await coursesAddData.save();
      console.log(result);
      console.log("Updated Corses Data");
      res.send(result);
  
    } catch (err) {
      console.error(err);
      res.status(500).send();
    }
  };



  exports.updateCoursesData = async (req, res) => {
    const getID = { id: req.params.id }
    const coursesObj = {
  
       CompanyName  : req.body.CompanyName  ,
       CourseName   : req.body.CourseName  ,
       StartingDate : req.body.StartingDate ,
       LastDate     : req.body.LastDate  ,
       Teacher      : req.body.Teacher   ,
  
    }
  
    const corsesUpdatedData = await coursesModal.findOneAndUpdate(getID, coursesObj)
    res.send(corsesUpdatedData)
    console.log(corsesUpdatedData)
  }



  //                       disabled
  
  exports.disableCoursesData = async (req, res) => {
    const getID = { id: req.params.id }
    const disablecoursesObj = {
  
       CompanyName  : req.body.CompanyName  ,
       CourseName   : req.body.CourseName  ,
       StartingDate : req.body.StartingDate ,
       LastDate     : req.body.LastDate  ,
       Teacher      : req.body.Teacher   ,
  
    }
  
    const corsesUpdatedData = await coursesModal.find(getID, disablecoursesObj)
    res.send(corsesUpdatedData)
    console.log(corsesUpdatedData)
  }
  