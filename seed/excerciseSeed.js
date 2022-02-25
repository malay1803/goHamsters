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
    excerciseImage: "/images/male/traps/stretches/1.gif",
    excerciseName: "Traps Stretch 1",
    excerciseDesc: "excercise for traps 1",
    excerciseCategory: "trapsStretches",
    step1: "Stand upright with your feet shoulder width apart.",
    step2:
      "Place your left hand on your head and gently pull your head down towards your left shoulder. Then return to centre point.",
    step3: "Repeat, using your right hand pulling towards your right shoulder.",
  }),
  new Excercise({
    excerciseImage: "/images/male/traps/stretches/2.gif",
    excerciseName: "Traps Stretch 2",
    excerciseDesc: "excercise for traps 2",
    excerciseCategory: "trapsStretches",
    step1:
      "Keeping your chest facing forward, turn your head 90 degrees to the left. Then return to centre point.",
    step2: "Stand upright with your feet shoulder width apart.",
    step3: "Repeat, turning your head in the other direction.",
  }),
  new Excercise({
    excerciseImage: "/images/male/traps/stretches/3.gif",
    excerciseName: "Traps Stretch 3",
    excerciseDesc: "excercise for traps 3",
    excerciseCategory: "trapsStretches",
    step1: "Stand upright with your feet shoulder width apart.",
    step2: "Nod your head forward, bringing your chin to your chest.",
    step3: "You will feel the stretch across your neck.",
  }),
  new Excercise({
    excerciseImage: "/images/male/traps/bodyweight/1.gif",
    excerciseName: "Elevated Pike Press",
    excerciseDesc: "excercise for traps 4",
    excerciseCategory: "trapsBodyweight",
    step1: "Use a bench or an object to elevate your feet.",
    step2: "Lower your head towards the floor by bending your elbows",
    step3: "Push through your hands and return to the starting pike position.",
    step4: "Repeat",
  }),
  new Excercise({
    excerciseImage: "/images/male/traps/bodyweight/2.gif",
    excerciseName: "Elevated Pike traps Shrug",
    excerciseDesc: "excercise for traps 5",
    excerciseCategory: "trapsBodyweight",
  }),
  new Excercise({
    excerciseImage: "/images/male/traps/barbell/1.gif",
    excerciseName: "Barbell Silverback Shrug",
    excerciseDesc: "excercise for traps 6",
    excerciseCategory: "trapsBarbells",
  }),
  new Excercise({
    excerciseImage: "/images/male/traps/dumbbells/1.gif",
    excerciseName: "Seated DB Shrugs",
    excerciseDesc: "excercise for traps 7",
    excerciseCategory: "trapsDumbbells",
  }),
  new Excercise({
    excerciseImage: "/images/male/traps/kettlebells/1.gif",
    excerciseName: "Incline Shrug",
    excerciseDesc: "excercise for traps 8",
    excerciseCategory: "trapsKettlebells",
  }),
  new Excercise({
    excerciseImage: "/images/male/traps/kettlebells/2.gif",
    excerciseName: "Kettlebell Silverback Shrug",
    excerciseDesc: "excercise for traps 9",
    excerciseCategory: "trapsKettlebells",
  }),
  new Excercise({
    excerciseImage: "/images/male/traps/kettlebells/3.gif",
    excerciseName: "Upright Row",
    excerciseDesc: "excercise for traps 10",
    excerciseCategory: "trapsKettlebells",
  }),
  new Excercise({
    excerciseImage: "/images/male/traps/kettlebells/4.gif",
    excerciseName: "Shrug",
    excerciseDesc: "excercise for traps 11",
    excerciseCategory: "trapsKettlebells",
  }),
  // shoulders
  new Excercise({
    excerciseImage: "/images/male/shoulders/stretches/1.gif",
    excerciseName: "Shoulder Stretch 1",
    excerciseDesc: "excercise for shoulders 1",
    excerciseCategory: "shoulderStretches",
  }),
  new Excercise({
    excerciseImage: "/images/male/shoulders/stretches/2.gif",
    excerciseName: "Shoulder Stretch 2",
    excerciseDesc: "excercise for shoulders 2",
    excerciseCategory: "shoulderStretches",
  }),
  new Excercise({
    excerciseImage: "/images/male/shoulders/stretches/3.gif",
    excerciseName: "Shoulder Stretch 3",
    excerciseDesc: "excercise for shoulders 3",
    excerciseCategory: "shoulderStretches",
  }),
  new Excercise({
    excerciseImage: "/images/male/shoulders/stretches/4.gif",
    excerciseName: "Shoulder Stretch 4",
    excerciseDesc: "excercise for shoulders 4",
    excerciseCategory: "shoulderStretches",
  }),
  new Excercise({
    excerciseImage: "/images/male/shoulders/bodyweight/1.gif",
    excerciseName: "Shoulder Bodyweight 1",
    excerciseDesc: "excercise for bodyweight 1",
    excerciseCategory: "shoulderBodyweight",
  }),
  new Excercise({
    excerciseImage: "/images/male/shoulders/bodyweight/2.gif",
    excerciseName: "Shoulder Bodyweight 2",
    excerciseDesc: "excercise for bodyweight 2",
    excerciseCategory: "shoulderBodyweight",
  }),
  new Excercise({
    excerciseImage: "/images/male/shoulders/bodyweight/3.gif",
    excerciseName: "Shoulder Bodyweight 3",
    excerciseDesc: "excercise for bodyweight 3",
    excerciseCategory: "shoulderBodyweight",
  }),
  new Excercise({
    excerciseImage: "/images/male/shoulders/bodyweight/4.gif",
    excerciseName: "Shoulder Bodyweight 4",
    excerciseDesc: "excercise for bodyweight 4",
    excerciseCategory: "shoulderBodyweight",
  }),
  new Excercise({
    excerciseImage: "/images/male/shoulders/dumbbells/1.gif",
    excerciseName: "Shoulder dumbells",
    excerciseDesc: "excercise for dumbells 1",
    excerciseCategory: "shoulderDumbbells",
  }),
  new Excercise({
    excerciseImage: "/images/male/shoulders/dumbbells/2.gif",
    excerciseName: "Shoulder dumbbells",
    excerciseDesc: "excercise for dumbbells 2",
    excerciseCategory: "shoulderDumbbells",
  }),
  new Excercise({
    excerciseImage: "/images/male/shoulders/dumbbells/3.gif",
    excerciseName: "Shoulder dumbells",
    excerciseDesc: "excercise for dumbells 3",
    excerciseCategory: "shoulderDumbbells",
  }),
  new Excercise({
    excerciseImage: "/images/male/shoulders/dumbbells/4.gif",
    excerciseName: "Shoulder dumbells",
    excerciseDesc: "excercise for dumbells 4",
    excerciseCategory: "shoulderDumbbells",
  }),
  new Excercise({
    excerciseImage: "/images/male/shoulders/dumbbells/5.gif",
    excerciseName: "Shoulder dumbells",
    excerciseDesc: "excercise for dumbells 5",
    excerciseCategory: "shoulderDumbbells",
  }),
  new Excercise({
    excerciseImage: "/images/male/traps/barbell/1.gif",
    excerciseName: "Barbell Overhead Press",
    excerciseDesc: "excercise for shoulder",
    excerciseCategory: "shoulderBarbells",
  }),
  new Excercise({
    excerciseImage: "/images/male/shoulder/kettlebells/1.gif",
    excerciseName: "Single Arm Rear Delt Fly",
    excerciseDesc: "excercise for shoulder ",
    excerciseCategory: "shoulderKettlebells",
  }),
  new Excercise({
    excerciseImage: "/images/male/shoulder/kettlebells/2.gif",
    excerciseName: "Front Raise",
    excerciseDesc: "excercise for shoulder ",
    excerciseCategory: "shoulderKettlebells",
  }),
  new Excercise({
    excerciseImage: "/images/male/shoulder/kettlebells/3.gif",
    excerciseName: "Rear Delt Row",
    excerciseDesc: "excercise for shoulder ",
    excerciseCategory: "shoulderKettlebells",
  }),
  new Excercise({
    excerciseImage: "/images/male/shoulder/kettlebells/4.gif",
    excerciseName: "Long Lever Lateral Raise",
    excerciseDesc: "excercise for shoulder ",
    excerciseCategory: "shoulderKettlebells",
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

seedDb();

function disconnect() {
  mongoose.disconnect();
}
