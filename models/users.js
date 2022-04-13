const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');
const crypto = require('crypto');

const userSchema = new mongoose.Schema({
  Email: {
    type: String,
    lowercase: true,
    required: [true, 'Email is required'],
    max: [128, "Email can't be greater than 128 characters"],
    unique: true
  },
  Password: {
    type: String,
    required: [true, "Password is required"],
    min: [8, "Password should be atleast 8 characters long"],
    max: [24, "Password can't be greater than 24"]
  },
  firstName: {
    type: String,
    required: [true, "First Name is required"],
    min: [2, "First Name should be greater than 2"],
    max: [16, "First Name can't be greater than 16"],
  },
  lastName: {
    type: String,
    required: [true, "Last Name is required"],
    min: [2, "Last Name should be greater than 2"],
    max: [16, "Last Name can't be greater than 16"],
  },
  Age: {
    type: String,
    min: [6, "You should be atleast 6 years old."]
  },
  weight:{
    type: String
  },
  height:{
    type: String
  },
  activity:{
    type: String
  },
  reqCalories:{
    type: String
  },
  gender:{
    type: String
  },
  passwordChangedAt: Date,
    passwordResetToken: String,
    passwordResetExpires: Date
});

userSchema.pre('save', async function(next){
  if(!this.isModified('Password')) return next();
  
  this.Password = await bcrypt.hash(this.Password, 12);
  next();
});

userSchema.pre('save', function(next) {
  if (!this.isModified('Password') || this.isNew) return next();

  this.passwordChangedAt = Date.now() - 1000;
  next();
});

userSchema.methods.correctPassword= async function(candidatePassword, userPassword){
  return await bcrypt.compare(candidatePassword, userPassword);
};

userSchema.methods.changedPasswordAfter = function(JWTTimestamp) {
  if (this.passwordChangedAt) {
    const changedTimestamp = parseInt(
      this.passwordChangedAt.getTime() / 1000,
      10
    );

    return JWTTimestamp < changedTimestamp;
  }
  // False means NOT changed
  return false;
};

userSchema.methods.createPasswordResetToken = function() {
  const resetToken = crypto.randomBytes(32).toString('hex');

  this.passwordResetToken = crypto
    .createHash('sha256')
    .update(resetToken)
    .digest('hex');

  // console.log({ resetToken }, this.passwordResetToken);

  this.passwordResetExpires = Date.now() + 10 * 60 * 1000;

  return resetToken;
};

const User = mongoose.model("User", userSchema);

module.exports = User;
