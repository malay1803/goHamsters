const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.use(express.static(__dirname + '/public'))

app.get("/", (req, res) => {
  //   res.send("hello");
  res.render("index");
});

app.get("/directory", (req, res) => {
  //   res.send("hello");
  res.render("directory");
});

app.listen(3000, () => {
  console.log("app running on port 3000");
});
