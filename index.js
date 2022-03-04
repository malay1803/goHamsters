const express = require("express");
const app = express();
const mongoose = require("mongoose");
const session = require("express-session");
var bcrypt = require("bcryptjs");
var salt = bcrypt.genSaltSync(10);
const request = require("request");

const User = require("./models/users");
const Excercise = require("./models/excercise");

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

const directoryRoute = require("./routes/Directory");

app.use("/directory", directoryRoute);

app.post("/search", (req, res) => {
  var query = req.body.searchQuery;
  request.get(
    {
      url: "https://api.calorieninjas.com/v1/nutrition?query=" + query,
      headers: {
        "X-Api-Key": "o6l5WsZgJr9hRQRTRauoog==vQ8OewoiWvHVb690",
      },
    },
    function (error, response, body) {
      if (error) return console.error("Request failed:", error);
      else if (response.statusCode != 200)
        return console.error(
          "Error:",
          response.statusCode,
          body.toString("utf8")
        );
      else {
        console.log(body.items[0].sugar_g);
      }
    }
  );
});

app.get("/directory1", (req, res) => {
  //   res.send("hello");
  res.render("directory1", { userName: req.session.name });
});

app.get("/login", (req, res) => {
  //   res.send("hello");
  res.render("login", { userName: req.session.name });
});

app.get("/userDashboard", (req, res) => {
  res.render("userDashboard", { userName: req.session.name });
});

app.get("/calculator1", (req, res) => {
  //   res.send("hello");
  res.render("calculator1", { userName: req.session.name });
});
app.get("/about", (req, res) => {
  res.render("about", { userName: req.session.name });
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

app.get("/logout", (req, res) => {
  req.session.destroy((err) => {
    console.log(err);
  });
  res.redirect("/login");
});

app.listen(3000, () => {
  console.log("app running on port 3000");
});
