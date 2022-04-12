const express = require("express")
const Excercise = require("./../models/excercise")
const router = express.Router()
const auth = require("../controllers/authController");

router.get("/",auth.isLoggedIn, async (req, res) => {
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
  if (bodyPart === "shoulders") {
    excerType = req.query.type;
    var excercises = await Excercise.find({
      excerciseCategory: "shoulder" + req.query.type,
    });
  }
  if (bodyPart === "chest") {
    excerType = req.query.type;
    var excercises = await Excercise.find({
      excerciseCategory: "chest" + req.query.type,
    });
  }
  if (bodyPart === "abs") {
    excerType = req.query.type;
    var excercises = await Excercise.find({
      excerciseCategory: "abs" + req.query.type,
    });
  }
  if (bodyPart === "quads") {
    excerType = req.query.type;
    var excercises = await Excercise.find({
      excerciseCategory: "quads" + req.query.type,
    });
  }
  if (bodyPart === "calves") {
    excerType = req.query.type;
    var excercises = await Excercise.find({
      excerciseCategory: "calves" + req.query.type,
    });
  }
  if (bodyPart === "forearms") {
    excerType = req.query.type;
    var excercises = await Excercise.find({
      excerciseCategory: "forearms" + req.query.type,
    });
  }
  if (bodyPart === "biceps") {
    excerType = req.query.type;
    var excercises = await Excercise.find({
      excerciseCategory: "biceps" + req.query.type,
    });
  }
  if (bodyPart === "triceps") {
    excerType = req.query.type;
    var excercises = await Excercise.find({
      excerciseCategory: "triceps" + req.query.type,
    });
  }
  if (bodyPart === "midback") {
    excerType = req.query.type;
    var excercises = await Excercise.find({
      excerciseCategory: "midack" + req.query.type,
    });
  }
  if (bodyPart === "lats") {
    excerType = req.query.type;
    var excercises = await Excercise.find({
      excerciseCategory: "lats" + req.query.type,
    });
  }
  if (bodyPart === "glutes") {
    excerType = req.query.type;
    var excercises = await Excercise.find({
      excerciseCategory: "glutes" + req.query.type,
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
    excercises: excercises,
    excerType: excerType,
    bodyPart: bodyPart,
  });
});


module.exports = router