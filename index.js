require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const session = require("express-session");
var bcrypt = require("bcryptjs");
var salt = bcrypt.genSaltSync(10);
const Email = require('./utils/email.js');
const User = require("./models/users");
const Excercise = require("./models/excercise")
const crypto = require('crypto');

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require("cors"); 

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: true }));

app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false,
  })
);

mongoose
  .connect(
    "mongodb+srv://admin:admin@cluster0.6h1i1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    console.log("mongodb connected");
  })
  .catch((err) => {
    console.log(err);
  });

const directoryRoute = require("./routes/Directory");
const userRoute = require("./routes/User");

app.use("/directory", directoryRoute);
app.use("/", userRoute);


// app.post("/loginUser", async (req, res) => {
//   var results = await User.findOne({ Username: req.body.loginUserName });
//   if (results) {
//     var check = await bcrypt.compare(req.body.loginPassword, results.Password);
//     if (check) {
//       sess = req.session;
//       sess.name = results.Username;
//       sess.email = results.Email;
//       res.redirect("userDashboard");
//     } else {
//       res.redirect("login");
//     }
//   } else {
//     res.redirect("login");
//   }
// });


app.listen(3000, () => {
  console.log("app running on port 3000");
});

// forget router

app.post('/forgotPassword', async (req, res, next) => {
  // 1) Get user based on POSTed email
  const user = await User.findOne({ Email: req.body.loginUserName });

  if (!user) {
    return next(new AppError('There is no user with email address.', 404));
  }

  // 2) Generate the random reset token
  const resetToken = user.createPasswordResetToken();
  await user.save({ validateBeforeSave: false });

  // 3) Send it to user's email
  try {
    const resetURL = `${req.protocol}://${req.get(
      'host'
    )}/resetPassword/${resetToken}`;
    await new Email(user, resetURL).sendPasswordReset();

    res.redirect("login");

  } catch (err) {
    user.passwordResetToken = undefined;
    user.passwordResetExpires = undefined;
    await user.save({ validateBeforeSave: false });
    return next(
      new AppError('There was an error sending the email. Try again later!'),
      500
    );
  }
});



app.get("/resetPassword/:token", async(req, res, next) =>{
  const hashedToken = crypto
      .createHash('sha256')
      .update(req.params.token)
      .digest('hex');

  const user = await User.findOne({
      passwordResetToken: hashedToken
  });

  if (!user) {
      return next(new AppError('Token is invalid or has expired', 400));
  }

  res.status(200).render('newpass',{
      title: 'Password Reset',
      token:req.params.token,
     email:user.Email
  });
});



app.post('/resetPassword/:token', async (req, res, next) => {
  // 1) Get user based on the token
  const hashedToken = crypto
    .createHash('sha256')
    .update(req.params.token)
    .digest('hex');

  const user = await User.findOne({
    passwordResetToken: hashedToken,
    passwordResetExpires: { $gt: Date.now() }
  });

  // 2) If token has not expired, and there is user, set the new password
  if (!user) {
    return next(new AppError('Token is invalid or has expired', 400));
  }
  const hashPass1 = await bcrypt.hashSync(req.body.password, salt);
  user.Password = hashPass1;
  user.passwordResetToken = undefined;
  user.passwordResetExpires = undefined;
  await user.save();

  // 4) Changes password done redirect it 
  res.redirect("/login");
});
