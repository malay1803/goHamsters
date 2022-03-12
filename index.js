const express = require("express");
const app = express();
const mongoose = require("mongoose");
const session = require("express-session");
var bcrypt = require("bcryptjs");
var salt = bcrypt.genSaltSync(10);
const request = require("request");

const User = require("./models/users");
const Excercise = require("./models/excercise");
const FoodData = require("./models/foodData");

var data;
var carbs;
var calories;
var protein;
var fat;
var foodName;

var foodNameTD;
var caloriesTD;
var carbsTD;
var fatTD;
var proteinTD;

var totalCarbs = 0;
var totalCalories = 0;
var totalProtein = 0;
var totalFat = 0;

var foodData1 = "none";

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
app.use("/loginUser", userRoute);


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

app.post("/search", async (req, res) => {
  var query = req.body.searchQuery;
  request.get(
    {
      url: "https://api.calorieninjas.com/v1/nutrition?query=" + query,
      headers: {
        "X-Api-Key": "o6l5WsZgJr9hRQRTRauoog==vQ8OewoiWvHVb690",
      },
    },
    async function (error, response, body) {
      if (error) return console.error("Request failed:", error);
      else if (response.statusCode != 200)
        return console.error(
          "Error:",
          response.statusCode,
          body.toString("utf8")
        );
      else {
        data = JSON.parse(body);
        foodName = data.items[0].name;
        calories = data.items[0].calories;
        fat = data.items[0].fat_total_g;
        protein = data.items[0].protein_g;
        carbs = data.items[0].carbohydrates_total_g;

        if (foodName === undefined) {
          foodName = "name";
          calories = "1";
          carbs = "1";
          fat = "1";
          protein = "1";
        }
        res.redirect("/userDashboard");
      }
    }
  );
});

app.post("/addItem", async (req, res) => {
  foodNameTD = foodName;
  caloriesTD = calories;
  carbsTD = carbs;
  fatTD = fat;
  proteinTD = protein;

  if (foodNameTD === undefined) {
    foodNameTD = "foodName";
    caloriesTD = "1";
    carbsTD = "1";
    fatTD = "1";
    proteinTD = "1";
  }

  var mealTime = req.body.meal;
  var gramsIntake = req.body.gramsIntake;

  const newFoodAdd = {
    foodName: foodNameTD,
    calories: caloriesTD,
    carbohydrate: carbsTD,
    protein: proteinTD,
    fat: fatTD,
    meal: req.body.meal,
    gramsIntake: req.body.gramsIntake,
  };
  const newFood = new FoodData(newFoodAdd);
  await newFood.save();
  res.redirect("/userDashboard");
});

app.get("/directory1", (req, res) => {
  //   res.send("hello");
  res.render("directory1", { userName: req.session.name });
});

app.get("/login", (req, res) => {
  //   res.send("hello");
  res.render("login", { userName: req.session.name });
});

app.get("/userDashboard", async (req, res) => {
  console.log(req.session);
  var totalCarbs = 0;
  var totalCalories = 0;
  var totalProtein = 0;
  var totalFat = 0;

  foodData1 = await FoodData.find();

  for (let fd in foodData1) {
    totalCalories += parseInt(foodData1[fd].calories);
    totalCarbs += parseInt(foodData1[fd].carbohydrate);
    totalProtein += parseInt(foodData1[fd].protein);
    totalFat += parseInt(foodData1[fd].fat);
  }

  console.log(foodData1);

  let total = {
    totalCalories: totalCalories,
    totalCarbs: totalCarbs,
    totalProtein: totalProtein,
    totalFat: totalFat,
  };

  res.render("userDashboard", {
    userName: req.session.name,
    foodName: foodName,
    calories: calories,
    fat: fat,
    protein: protein,
    carbs: carbs,
    foodNameTD: foodNameTD,
    caloriesTD: caloriesTD,
    carbsTD: carbsTD,
    fatTD: fatTD,
    proteinTD: proteinTD,
    foodData: foodData1,
    total: total,
  });
});

app.get("/userDasboard/FoodDelete/:_id", async (req, res) => {
  const { _id } = req.params;
  await FoodData.deleteOne({ _id })
    .then(() => {
      console.log("Deleted successfully");
      res.redirect("/userDashboard");
    })
    .catch((err) => console.log(err));
});

app.post("/foodIntakeUpdate", (req, res) => {
  let foodIntakeUpdate = req.body.foodIntake;
  let foodID = req.body.foodID;
  console.log(foodID, foodIntakeUpdate);
  FoodData.updateOne({_id: foodID}, {gramsIntake: foodIntakeUpdate})
  .then(()=>{
    console.log("updated");
    res.redirect("/userDashboard")
  }).catch((err)=>{
    console.log(err);
  })
});

app.get("/calculator1", (req, res) => {
  //   res.send("hello");
  res.render("calculator1", { userName: req.session.name });
});
app.get("/about", (req, res) => {
  res.render("about", { userName: req.session.name });
});

app.post("/addUser", async (req, res) => {
  // const hashPass = await bcrypt.hashSync(req.body.password, salt);
  // const newUserDetails = {
  //   Username: req.body.username,
  //   Email: req.body.email,
  //   Password: hashPass,
  // };
  // const newUser = new User(newUserDetails);
  // await newUser.save();
  res.redirect("/login");
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
