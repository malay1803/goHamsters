const express = require("express");
const request = require("request");
const app = express.Router();
const crypto = require("crypto");

const User = require("../models/users");
const Excercise = require("../models/excercise");
const FoodData = require("../models/foodData");

const view = require("../controllers/viewController");
const auth = require("../controllers/authController");
const AppError = require("./../utils/appError");

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
var foodData2 = "none";

app.get("/directory1", auth.isLoggedIn, (req, res) => {
  res.render("directory1");
});

app.get("/login", auth.isLoggedIn, (req, res) => {
  console.log(req.cookies.jwt);
  console.log(auth.isLoggedIn);
  if(req.cookies.jwt==="loggedout"){
    res.render("login");
  }else if(req.cookies.jwt){
    res.redirect("/userDashboard")
  }else{
    res.render("login");
  }
});

app.get("/userDashboard", auth.protect, async (req, res) => {
  var totalCarbs = [];
  var totalCalories = [];
  var totalProtein = [];
  var totalFat = [];
  var totalGramsIntake = [];
  let total=undefined
  var date = new Date() 
  // nowDate.toISOString().slice(0,10)
  
  foodData1 = await FoodData.find({ userID: req.user._id});

  for (let fd in foodData1) {
    console.log("123213new", foodData1[fd].date, `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`);
      if(foodData1[fd].date===`${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`){
      totalCalories.push(parseFloat(foodData1[fd].calories))
      totalCarbs.push(parseFloat(foodData1[fd].carbohydrate))
      totalProtein.push(parseFloat(foodData1[fd].protein))
      totalFat.push(parseFloat(foodData1[fd].fat))
      totalGramsIntake.push(parseFloat(foodData1[fd].gramsIntake))
        // totalCalories += parseFloat(foodData1[fd].calories);
      // totalCarbs += parseFloat(foodData1[fd].carbohydrate);
      // totalProtein += parseFloat(foodData1[fd].protein);
      // totalFat += parseFloat(foodData1[fd].fat);
      // totalGramsIntake = parseFloat(foodData1[fd].gramsIntake);
    }
  }
  console.log(totalFat);
  var totalCal = 0;
  var totalPro = 0;
  var totalCarb = 0;
  var totalF=0;

  for(var i=0; i< totalCalories.length; i++) {
    totalCal += totalCalories[i]*totalGramsIntake[i];
    totalPro += totalProtein[i]*totalGramsIntake[i];
    totalCarb += totalCarbs[i]*totalGramsIntake[i];
    totalF += totalFat[i]*totalGramsIntake[i];
  }

  console.log(totalFat);

    total = {
      totalCalories: totalCal,
      totalCarbs: totalCarb,
      totalProtein: totalPro,
      totalFat: totalF,
    };
  
    console.log(total);

    for (let tot in total){
      total[tot] /= 100
      total[tot] = total[tot].toFixed(1);
    }

    // for (let tot in total) {
    //   total[tot] *= totalGramsIntake / 100;
    //   total[tot] = total[tot].toFixed(1);
    // }


  res.render("userDashboard", {
    userName: "hello",
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

app.get("/calculator1", auth.isLoggedIn, (req, res) => {
  //   res.send("hello");
  res.render("calculator1");
});

app.get("/", auth.isLoggedIn, (req, res) => {
  res.render("about");
});

app.get("/editProfile", auth.protect, async (req, res) => {
  res.render("editProfile");
});


app.get("/logout", auth.logout, (req, res) => {
  res.redirect("/login");
});

app.get("/userDasboard/FoodDelete/:_id", async (req, res) => {
  const { _id } = req.params;
  await FoodData.deleteOne({ _id })
    .then(() => {
      res.redirect("/userDashboard");
    })
    .catch((err) => console.log(err));
});

app.get("/resetPassword/:token", async (req, res, next) => {
  const hashedToken = crypto
    .createHash("sha256")
    .update(req.params.token)
    .digest("hex");

  const user = await User.findOne({
    passwordResetToken: hashedToken,
  });

  if (!user) {
    return next(new AppError("Token is invalid or has expired", 400));
  }

  res.status(200).render("newpass", {
    title: "Password Reset",
    token: req.params.token,
    email: user.Email,
  });
});

// ------------------------------------------------ Post Requests ----------------------------------------------------------//
app.post("/foodIntakeUpdate", (req, res) => {
  let foodIntakeUpdate = req.body.foodIntake;
  let foodID = req.body.foodID;
  FoodData.updateOne({ _id: foodID }, { gramsIntake: foodIntakeUpdate })
    .then(() => {
      res.redirect("/userDashboard");
    })
    .catch((err) => {
      console.log(err);
    });
});

app.post("/editProfileSubmit/:id", auth.protect, async (req,res)=>{
  const editValues = req.body
  const edit = await User.findByIdAndUpdate({_id:req.params.id}, {
    $set:{
      firstName: editValues.firstName,
      lastName: editValues. lastName,
      Age: editValues.editAge,
      height: editValues.editHeight,
      weight: editValues.editWeight,
      weight: editValues.editWeight,
      activity: editValues.editActivity,
      reqCalories: editValues.userCalories,
      gender: editValues.options
    }
  })
  // const newEditUser = new User(editUser)
  await edit.save()
  res.redirect("/userDashboard")
})

app.post("/addUser", auth.signup, view.adduser);

app.post("/forgotPassword", auth.forgotPassword, async (req, res, next) => {
  res.redirect("login");
});

app.post(
  "/resetPassword/:token",
  auth.resetPassword,
  async (req, res, next) => {
    res.redirect("/login");
  }
);

app.post("/loginUser", auth.login, async (req, res) => {
  
  res.redirect("/userDashboard");
});

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
        if (data.items[0] === undefined) {
          console.log("Food not found");
        } else {
          foodName = data.items[0].name;
          calories = data.items[0].calories;
          fat = data.items[0].fat_total_g;
          protein = data.items[0].protein_g;
          carbs = data.items[0].carbohydrates_total_g;
        }
        res.redirect("/userDashboard");
      }
    }
  );
});

app.post("/addItem", auth.protect, async (req, res) => {
  foodNameTD = foodName;
  caloriesTD = calories;
  carbsTD = carbs;
  fatTD = fat;
  proteinTD = protein;
  
  var date = new Date();

  console.log("fdate", date.getMonth(), date.getDate(), date.getFullYear())

  console.log("lsadl", date.toISOString().slice(0,10))

  if (foodNameTD === undefined) {
    foodNameTD = "";
    caloriesTD = "";
    carbsTD = "";
    fatTD = "";
    proteinTD = "";
  }

  const newFoodAdd = {
    foodName: foodNameTD,
    calories: caloriesTD,
    carbohydrate: carbsTD,
    protein: proteinTD,
    fat: fatTD,
    meal: req.body.meal,
    gramsIntake: req.body.gramsIntake,
    userID: req.user._id,
    date: `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`
  };

  const newFood = new FoodData(newFoodAdd);
  await newFood.save();
  res.redirect("/userDashboard");
});

module.exports = app;
