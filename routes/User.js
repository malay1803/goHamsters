const express = require("express")
const Excercise = require("./../models/users")
const router = express.Router()

app.post("/", async (req, res) => {
    var results = await User.findOne({ Username: req.body.loginUserName });
    if (results) {
      var check = await bcrypt.compare(req.body.loginPassword, results.Password);
      if (check) {
        sess = req.session;
        sess.name = results.Username;
        sess.email = results.Email;
        res.redirect("userDashboard");
      } else {
        res.redirect("login");
      }
    } else {
      res.redirect("login");
    }
  });