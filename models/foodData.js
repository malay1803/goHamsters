const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userID:{
    type: String,
  },
  date:{
    type: String
  },
  foodName: {
    type: String,
    required: [true, "Name should not be blank"],
  },
  calories: {
    type: String,
    required: true,
  },
  carbohydrate: {
    type: String,
    required: true,
  },
  protein: {
    type: String,
    required: true,
  },
  fat: {
    type: String,
    required: true,
  },
  meal:{
    type: String,
    required: true
  },
  gramsIntake:{
    type: String,
    required: true
  }
});

const User = mongoose.model("FoodData", userSchema);

module.exports = User;
