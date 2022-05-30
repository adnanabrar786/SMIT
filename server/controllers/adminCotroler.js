const adminModel = require("../modals/adminModel");

exports.login = async (req, res, next) => {
  try {

    const { email, password } = req.body;

    const exitingAdnmin = await adminModel.findOne({ email })

    if (!exitingAdnmin)
      return res.status(4000).json({
        errorMessage: "please enter all reaquire field"
      })


    if (exitingAdnmin) {
      res.send(exitingAdnmin._id) 
      console.log("valid");
    }

    else {
      console.log("invalid Login Detailas");
    }

  } catch (e) {
    console.log(e);
  }
};

exports.getalladmin = async (req, res, next) => {
  try {
    const getalladmin = await adminModel.find({});
    res.send(getalladmin);
    if (getalladmin) {
      console.log(getalladmin);
      console.log("ok");
    } else {
      console.log("invalid");
    }
  } catch (e) {
    console.log(e);
  }
};


exports.addadmin = async (req, res, next) => {

  //   {
  //     "FirstName" : "Adnan5" ,
  //     "LastName" : "Abrar5" ,
  //     "email" : "adnan54@gmail.com" ,
  //     "password" : "password" ,
  //     "ConfirmPassword" : "password" 
  // }

  const FirstName = req.body.FirstName
  const LastName = req.body.LastName
  const email = req.body.email
  const password = req.body.password
  const ConfirmPassword = req.body.ConfirmPassword


  try {
    const adminUserData = await adminModel({
      FirstName: FirstName,
      LastName: LastName,
      email: email,
      password: password,
      ConfirmPassword: ConfirmPassword
    });

    const result = await adminUserData.save();
    console.log(result);
    res.send(result);

  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
};


exports.resetPassword = async (req, res) => {
  const getID = { id: req.params.id }
  const adminObj = {

    //    FirstName : req.body.FirstName ,
    //    LastName : req.body.LastName ,
    //    email : req.body.email ,
    password: req.body.password,
    //    ConfirmPassword : req.body.ConfirmPassword

  }

  const adminUpdatedData = await adminModel.findOneAndUpdate(getID, adminObj)
  res.send(adminUpdatedData)
  console.log(adminUpdatedData)
}



// exports.updateadmin = async (req, res) => {
//   const getID = { id: req.params.id }
//   const adminObj = {

//     name: req.body.name,
//     username: req.body.username,
//     email: req.body.email,
//     password: req.body.password,
//     isadmin: req.body.isadmin

//   }

//   const adminUpdatedData = await admin.findOneAndUpdate(getID, adminObj)
//   res.send(adminUpdatedData)
//   console.log(adminUpdatedData)
// }

// exports.deletealladmin = async (req, res, next) => {
//   try {
//     const updatebootcamp = await admin.findByIdAndUpdate(
//       req.params.id,
//       req.body
//     );
//     res.send(updatebootcamp);
//   } catch (e) {
//     console.log(e);
//     res.send(e);
//   }
// };



// exports.deletealladmin = (req, res, next) => {
//   const removebootcamp = admin.findOneAndDelete(req.params.id, (ee) => {
//     res.send(ee);
//   });
// };