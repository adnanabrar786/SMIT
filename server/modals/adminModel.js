const mongoose = require('mongoose')

const adminSchema = new mongoose.Schema({
    FirstName: { type: String },
    LastName: { type: String },
    email: { type: String },
    password: { type: String },
    ConfirmPassword: { type: String },
})

const Admin = mongoose.model("admin", adminSchema);

module.exports = Admin;
