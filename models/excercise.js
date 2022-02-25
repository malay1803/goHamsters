const mongoose = require("mongoose");

const excerciseSchema = new mongoose.Schema({
  excerciseImage: {
    type: String,
    required: [true],
  },
  excerciseName: {
    type: String,
    required: true,
  },
  excerciseDesc: {
    type: String,
    required: true,
  },
  excerciseCategory: {
    type: String,
    required: true,
  },
  step1: {
  type: String,
  required: false,
  },
  step2: {
    type: String,
    required: false,
  },
  step3: {
    type: String,
    required: false,
  },
  step4: {
    type: String,
    required: false,
  },
  step5: {
    type: String,
    required: false,
  },
});

module.exports = mongoose.model("Excercise", excerciseSchema);

