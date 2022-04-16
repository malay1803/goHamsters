const mongoose = require("mongoose");

const totalSchema = new mongoose.Schema({
  userID:{
    type: String,
  },
  date:{
    type: String
  },
  totalCalories: {
    type: String,
    required: [true, "Name should not be blank"],
  },
  totalCarbs: {
    type: String,
    required: true,
  },
  totalProteins: {
    type: String,
    required: true,
  },
  totalFats: {
    type: String,
    required: true,
  },
  gramsIntake:{
    type: String,
    // required: true
  }
});

const Total = mongoose.model("Total", totalSchema);

module.exports = Total;
