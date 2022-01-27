const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.use(express.static(__dirname + '/public'))

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
app.listen(3000, () => {
  console.log("app running on port 3000");
});
