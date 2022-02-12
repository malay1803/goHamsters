const express = require("express");
const app = express();
const mongoose = require("mongoose");
const User = require("./models/users");
const session = require("express-session");
var bcrypt = require("bcryptjs");
var salt = bcrypt.genSaltSync(10);

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: true }));

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

app.get("/", (req, res) => {
  res.send("hello");
  // res.render("index");
});

app.get("/directory", (req, res) => {
  //   res.send("hello");
  res.render("directory");
});
app.get("/directory1", (req, res) => {
  //   res.send("hello");
  res.render("directory1");
});

app.get("/login", (req, res) => {
  //   res.send("hello");
  res.render("login");
});

app.get("/userDashboard", (req, res) => {
  res.render("userDashboard");
});

app.post("/addUser", async (req, res) => {
  const hashPass = await bcrypt.hashSync(req.body.password, salt);
  const newUserDetails = {
    Username: req.body.username,
    Email: req.body.mail,
    Password: hashPass,
  };
  const newUser = new User(newUserDetails);
  await newUser.save();
  console.log(newUser);
  res.redirect("/login");
});

app.post("/loginUser", async (req, res) => {
  console.log(req.body.loginUserName);
  var results = await User.findOne({ name: req.body.loginUserName });
  console.log(results);
  if (results) {
    console.log(req.body.loginPassword);
    var check = await bcrypt.compare(req.body.loginPassword, results.Password);
    console.log(check);
    if (check) {
      sess = req.session;
      sess.name = results.Username;
      sess.email = results.Email;
      res.send("hello3");
    } else {
      res.send("hello1");
    }
  } else {
    res.send("hello2");
  }
});

app.listen(3000, () => {
  console.log("app running on port 3000");
});
