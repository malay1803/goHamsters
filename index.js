const express = require("express");
const app = express();
const mongoose = require("mongoose");
const session = require("express-session");
var bcrypt = require("bcryptjs");
var salt = bcrypt.genSaltSync(10);

const User = require("./models/users");
const Excercise = require("./models/excercise")

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

const directoryRoute = require("./routes/Directory")

app.use("/directory", directoryRoute)


app.get("/", (req, res) => {
  res.render("card");
  // res.render("index");
});


// app.get("/directory", async (req, res) => {
//   //   res.send("hello");
//   let excerType
//   let bodyPart = req.query.bodyPart 
//   console.log( req.query.bodyPart);

//   if(bodyPart==="traps"){
//     excerType = req.query.type
//     var excercises = await Excercise.find({excerciseCategory: "shoulder"+req.query.type})
//   }

//   if(req.query.type === undefined){
//     excerType = "Stretches"
//     bodyPart ="traps"
//     var excercises = await Excercise.find({excerciseCategory: "shoulderStretches"})
//   }
//   // const bodyPart = req.params;
//   res.render("directory", {userName: req.session.name, excercises: excercises, excerType: excerType, bodyPart:bodyPart});
// });


app.get("/directory1", (req, res) => {
  //   res.send("hello");
  res.render("directory1", {userName: req.session.name});
});

app.get("/login", (req, res) => {
  //   res.send("hello");
  res.render("login", {userName: req.session.name});
});

app.get("/userDashboard", (req, res) => {
  res.render("userDashboard", {userName: req.session.name})
});

app.get("/calculator1", (req, res) => {
  //   res.send("hello");
  res.render("calculator1", {userName: req.session.name});
});
app.get("/about", (req, res) => {
  res.render("about", {userName: req.session.name});
});

app.post("/addUser", async (req, res) => {
  const hashPass = await bcrypt.hashSync(req.body.password, salt);
  const newUserDetails = {
    Username: req.body.username,
    Email: req.body.email,
    Password: hashPass,
  };
  const newUser = new User(newUserDetails);
  await newUser.save();
  console.log(newUser);
  res.redirect("/login");
});

app.post("/loginUser", async (req, res) => {
  var results = await User.findOne({ Username: req.body.loginUserName });
  console.log(results);
  if (results) {
    var check = await bcrypt.compare(req.body.loginPassword, results.Password);
    console.log(check);
    if (check) {
      sess = req.session;
      sess.name = results.Username;
      sess.email = results.Email;
      console.log(sess);
      res.redirect("userDashboard");
    } else {
      res.redirect("login");
    }
  } else {
    res.redirect("login");
  }
});

app.get("/logout", (req,res)=>{
  req.session.destroy((err)=>{
    console.log(err);
  })
  res.redirect("/login")
})

app.listen(3000, () => {
  console.log("app running on port 3000");
});
