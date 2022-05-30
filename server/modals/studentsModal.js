const mongoose = require('mongoose')
// const readXlsxFile = require('read-excel-file/node');


//  excel file Fetch Data
const studentSchema = new mongoose.Schema({
  
    RollNumber: {
        prop: 'RollNumber',
        type: Number
    } ,
    fullName: {
        prop: 'fullName',
        type: String
    },
    fatherName: {
        prop: 'FatherName',
        type: String
    }
    ,
    CNICNumber: {
        prop: 'CNICNumber',
        type: String
    }
    //  ,
    // email : {
    //     prop: 'email',
    //     type: String }
   
    //  ,
    // ContanctNumber : {
    //     prop: 'ContanctNumber',
    //     type: Number },
    // CourseName : {
    //     prop: 'CourseName',
    //     type: String },
    // LastQualification : {
    //     prop: 'LastQualification',
    //     type: String }    
})

const students = mongoose.model("students", studentSchema);

module.exports = students;
