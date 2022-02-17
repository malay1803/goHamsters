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
});

module.exports = mongoose.model("Excercise", excerciseSchema);

