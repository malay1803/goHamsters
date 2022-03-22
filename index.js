require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require("cors"); 

const directoryRoute = require("./routes/Directory");
const userRoute = require("./routes/User");

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: true }));

app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

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

app.use("/directory", directoryRoute);
app.use("/", userRoute);

app.listen(3000, () => {
  console.log("app running on port 3000");
});