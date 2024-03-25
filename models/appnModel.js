const mongoose = require("mongoose");

const appointmentSchema = {
    name: String,
    age: String,
    gender: String,
    address: String,
    email:String,
    mob: String,
    date:String
}

const Appointment = mongoose.model("Appointment",appointmentSchema);

module.exports = Appointment;