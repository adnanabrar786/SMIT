const mongoose = require("mongoose")

const connectb = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/Hackaton');
        console.log("mongoose connected");
    } catch (e) {
        console.log(e);
    }
}

module.exports =  connectb;