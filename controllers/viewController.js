const User = require("../models/users");
const auth = require("../controllers/authController");

exports.adduser = async(req, res, next) => { 
    res.redirect("/editProfile");
}

exports.search = async(req, res, next) => { 
    res.redirect("/userDashboard");
}
