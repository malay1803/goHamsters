const express = require("express")
const Excercise = require("./../models/excercise")
const router = express.Router()

router.get("/", async (req, res) => {
  //   res.send("hello");
  let excerType;
  let bodyPart = req.query.bodyPart;
  let excerName = req.query.excerName

  if (bodyPart === "traps") {
    excerType = req.query.type;
    var excercises = await Excercise.find({
      excerciseCategory: "traps" + req.query.type,
    });
  }

  if (bodyPart === "shoulder") {
    excerType = req.query.type;
    var excercises = await Excercise.find({
      excerciseCategory: "shoulder" + req.query.type,
    });
  }

  if (req.query.type === undefined) {
    excerType = "Stretches";
    bodyPart = "traps";
    var excercises = await Excercise.find({
      excerciseCategory: "trapsStretches",
    });
  }
  
  // const bodyPart = req.params;
  res.render("directory", {
    userName: req.session.name,
    excercises: excercises,
    excerType: excerType,
    bodyPart: bodyPart,
  });
});


module.exports = router