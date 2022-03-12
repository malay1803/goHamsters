require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const session = require("express-session");
var bcrypt = require("bcryptjs");
var salt = bcrypt.genSaltSync(10);

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
