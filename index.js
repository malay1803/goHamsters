const express = require("express");
const app = express();
const mongoose=require("mongoose")
const User=require("./models/users")

app.set("view engine", "ejs");

app.use(express.static(__dirname + '/public'))

mongoose.connect("mongodb+srv://hamster:hamster@gohamsters.wo7az.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {useNewUrlParser:true, useUnifiedTopology:true}).then(
  ()=>{console.log("mongodb connected")}
).catch((err)=>{console.log(err)})


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

app.get("/login1", (req, res) => {
  //   res.send("hello");
  res.render("login1");
});
app.get("/calculator", (req, res) => {
  //   res.send("hello");
  res.render("calculator");
});
app.get("/calculator1", (req, res) => {
  //   res.send("hello");
  res.render("calculator1");
});
app.listen(3000, () => {
  console.log("app running on port 3000");
});
