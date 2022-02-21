var Excercise = require("../models/excercise");
var mongoose = require("mongoose");

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

var excercises = [
  new Excercise({
    excerciseImage: "/images/male/shoulder/stretches/1.gif",
    excerciseName: "Traps Stretch 1",
    excerciseDesc: "excercise for shoulder 1",
    excerciseCategory: "shoulderStretches"
  }),
  new Excercise({
    excerciseImage: "/images/male/shoulder/stretches/2.gif",
    excerciseName: "Traps Stretch 2",
    excerciseDesc: "excercise for shoulder 2",
    excerciseCategory: "shoulderStretches"
  }),
  new Excercise({
    excerciseImage: "/images/male/shoulder/stretches/3.gif",
    excerciseName: "Traps Stretch 3",
    excerciseDesc: "excercise for shoulder 3",
    excerciseCategory: "shoulderStretches"
  }),
  new Excercise({
    excerciseImage: "/images/male/shoulder/bodyweight/1.gif",
    excerciseName: "Elevated Pike Press",
    excerciseDesc: "excercise for shoulder 4",
    excerciseCategory: "shoulderBodyweight"
  }),
  new Excercise({
    excerciseImage: "/images/male/shoulder/bodyweight/2.gif",
    excerciseName: "Elevated Pike Shoulder Shrug",
    excerciseDesc: "excercise for shoulder 5",
    excerciseCategory: "shoulderBodyweight"
  }),
  new Excercise({
    excerciseImage: "/images/male/shoulder/barbell/1.gif",
    excerciseName: "Barbell Silverback Shrug",
    excerciseDesc: "excercise for shoulder 6",
    excerciseCategory: "shoulderBarbell"
  }),
  new Excercise({
    excerciseImage: "/images/male/shoulder/dumbbells/1.gif",
    excerciseName: "Seated DB Shrugs",
    excerciseDesc: "excercise for shoulder 7",
    excerciseCategory: "shoulderDumbbells"
  }),
  new Excercise({
    excerciseImage: "/images/male/shoulder/kettlebells/1.gif",
    excerciseName: "Incline Shrug",
    excerciseDesc: "excercise for shoulder 8",
    excerciseCategory: "shoulderKettlebells"
  }),
  new Excercise({
    excerciseImage: "/images/male/shoulder/kettlebells/2.gif",
    excerciseName: "Kettlebell Silverback Shrug",
    excerciseDesc: "excercise for shoulder 9",
    excerciseCategory: "shoulderKettlebells"
  }),
  new Excercise({
    excerciseImage: "/images/male/shoulder/kettlebells/3.gif",
    excerciseName: "Upright Row",
    excerciseDesc: "excercise for shoulder 10",
    excerciseCategory: "shoulderKettlebells"
  }),
  new Excercise({
    excerciseImage: "/images/male/shoulder/kettlebells/4.gif",
    excerciseName: "Shrug",
    excerciseDesc: "excercise for shoulder 11",
    excerciseCategory: "shoulderKettlebells"
  }),
];

const seedDb = async () => {
  var done = 0;
  await Excercise.deleteMany({});
  for (var i = 0; i < excercises.length; i++) {
    excercises[i].save((err, result) => {
      done++;
      console.log(done);
      if (done === excercises.length) {
        disconnect();
      }
    });
  }
};

seedDb()

function disconnect() {
  mongoose.disconnect();
}
