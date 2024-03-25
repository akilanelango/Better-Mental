const express = require("express")
const router = express.Router();
const Appointment = require("../models/appnModel");

router.route("/create").post((req,res)=>{
    const name  = req.body.name;
    const age  = req.body.age;
    const gender  = req.body.gender;
    const address  = req.body.address;
    const email  = req.body.email;
    const mob  = req.body.mob;
    const date  = req.body.date;
    const newAppn = new Appointment({
        name,
        age,
        gender,
        address,
        email,
        mob,
        date
    });
    newAppn.save();
})

module.exports = router;