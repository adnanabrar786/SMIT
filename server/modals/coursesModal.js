const mongoose = require('mongoose')

const coursesSchema = new mongoose.Schema({
    CompanyName : { type: String },
    CourseName : { type: String },
    StartingDate : { type: String },
    LastDate : { type: String },
    Teacher : { type: String },
    
})

const courses = mongoose.model("courses", coursesSchema);

module.exports = courses;
