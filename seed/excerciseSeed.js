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
    excerciseName: "Traps Stretch",
    excerciseDesc: "Difficulty: Beginner",
    excerciseCategory: "trapsStretches",
    step1: "Stand upright with your feet shoulder width apart.",
    step2: "Place your left hand on your head and gently pull your head down towards your left shoulder. Then return to centre point.",
    step3: "Repeat, using your right hand pulling towards your right shoulder.",
  }),
  new Excercise({
    excerciseImage: "/images/male/traps/stretches/2.gif",
    excerciseName: "Traps Stretch",
    excerciseDesc: "Difficulty: Beginner",
    excerciseCategory: "trapsStretches",
    step1:"Keeping your chest facing forward, turn your head 90 degrees to the left. Then return to centre point.",
    step2: "Stand upright with your feet shoulder width apart.",
    step3: "Repeat, turning your head in the other direction.",
  }),
  new Excercise({
    excerciseImage: "/images/male/traps/stretches/3.gif",
    excerciseName: "Traps Stretch",
    excerciseDesc: "Difficulty: Beginner",
    excerciseCategory: "trapsStretches",
    step1: "Stand upright with your feet shoulder width apart.",
    step2: "Nod your head forward, bringing your chin to your chest.",
    step3: "You will feel the stretch across your neck.",
  }),
  new Excercise({
    excerciseImage: "/images/male/traps/bodyweight/1.gif",
    excerciseName: "Elevated Pike Press",
    excerciseDesc: "Difficulty: Intermediate",
    excerciseCategory: "trapsBodyweight",
    step1: "Use a bench or an object to elevate your feet.",
    step2: "Lower your head towards the floor by bending your elbows",
    step3: "Push through your hands and return to the starting pike position.",
    step4: "Repeat",
  }),
  new Excercise({
    excerciseImage: "/images/male/traps/bodyweight/2.gif",
    excerciseName: "Elevated Pike Traps Shrug",
    excerciseDesc: "Difficulty: Intermediate",
    excerciseCategory: "trapsBodyweight",
    step1: "Use a bench or an object to elevate your feet.",
    step2: "Slowly lower your body (scapula) while keeping your elbows locked (this is key).",
    step3: "Slowly raise your body back to the start position.",
  }),
  new Excercise({
    excerciseImage: "/images/male/traps/barbell/1.gif",
    excerciseName: "Barbell Silverback Shrug",
    excerciseDesc: "Difficulty: Intermediate",
    excerciseCategory: "trapsBarbells",
    step1: "Stand with your feet shoulder width apart holding the Barbell with both hands in front just past shoulder width.",
    step2: "Bend forward at the hips with a slight bend in your knees, keeping your back straight",
    step3: "Engage your shoulder blades, as if you are trying to touch them together.",
    step4: "Release the shrug.",
  }),
  new Excercise({
    excerciseImage: "/images/male/traps/dumbbells/1.gif",
    excerciseName: "Seated DB Shrugs",
    excerciseDesc: "Difficulty: Beginner",
    excerciseCategory: "trapsDumbbells",
    step1: "Sit on a bench with dumbbells in both hands, palms facing your body, back straight.",
    step2: "Elevate your shoulders and hold the contracted position at the apex of the motion.",
    step3: "Slowly lower your shoulders back to starting position.",
  }),
  new Excercise({
    excerciseImage: "/images/male/traps/kettlebells/1.gif",
    excerciseName: "Incline Shrug",
    excerciseDesc: "Difficulty: Intermediate",
    excerciseCategory: "trapsKettlebells",
    step1: "Leaning across the back section of the bench, with feet firmly on the floor and with arms hanging to the sides",
    step2: "Holding the kettlebell in both hands engage your shoulder blades, as if you are trying to touch them together. Release the shrug.",
  }),
  new Excercise({
    excerciseImage: "/images/male/traps/kettlebells/2.gif",
    excerciseName: "Kettlebell Silverback Shrug",
    excerciseDesc: "Difficulty: Intermediate",
    excerciseCategory: "trapsKettlebells",
    step1: "Sit on a bench with dumbbells in both hands, palms facing your body, back straight.",
    step2: "Elevate your shoulders and hold the contracted position at the apex of the motion.",
    step3: "Slowly lower your shoulders back to starting position.",

  }),
  new Excercise({
    excerciseImage: "/images/male/traps/kettlebells/3.gif",
    excerciseName: "Upright Row",
    excerciseDesc: "Difficulty: Beginner",
    excerciseCategory: "trapsKettlebells",
    step1: "Stand with your feet shoulder width apart holding the kettlebell with both hands in front of your thighs.",
    step2: "Bend forward at the hips bringing the kettlebell to the floor while you slightly bend your knees, keeping your back straight.",
    step3: "Lift the kettlebell upwards towards your chest and repeat.",
  }),
  new Excercise({
    excerciseImage: "/images/male/traps/kettlebells/4.gif",
    excerciseName: "Shrug",
    excerciseDesc: "Difficulty: Beginner",
    excerciseCategory: "trapsKettlebells",
    step1: "Standing up straight with feet shoulder width apart.",
    step2: "Holding the kettlebell in both hands in front of your pelvis, engage your shoulder blades, as if you are trying to touch them together.",
    step3: "Release the shrug and repeat"
  }),
  // shoulders
  new Excercise({
    excerciseImage: "/images/male/shoulders/stretches/1.gif",
    excerciseName: "Shoulders Stretch",
    excerciseDesc: "Difficulty: Beginner",
    excerciseCategory: "shoulderStretches",
    step1: "Reach one arm behind your body, with your elbow pointing upward behind your head.",
    step2: "Assist the stretch with your other hand on your elbow to engage your shoulder.",
    step3: "Pause for a few seconds, then repeat the stretch with your other arm."

  }),
  new Excercise({
    excerciseImage: "/images/male/shoulders/stretches/2.gif",
    excerciseName: "Shoulders Stretch",
    excerciseDesc: "Difficulty: Beginner",
    excerciseCategory: "shoulderStretches",
    step1: "Start with your arms at either side. Begin by pushing your shoulders forward and in towards your chest.",
    step2: "Repeat as necessary.",
    step3: "Continue the circular motion with your shoulders, pinching up towards your ears, and then extending your chest outwards while you finish the motion.",
  }),
  new Excercise({
    excerciseImage: "/images/male/shoulders/stretches/3.gif",
    excerciseName: "Shoulders Stretch",
    excerciseDesc: "Difficulty: Beginner",
    excerciseCategory: "shoulderStretches",
    step1: "Place the top of your hand into the small of your back, your arm at a 90° angle.",
    step2: "Hold your elbow with the other arm, and slowly pull the arm forward until you feel your shoulder engaged in the stretch. Pause at the apex of the stretch and return to the starting position.",
    step3: "Return to starting position, and repeat with your other arm.",
  }),
  new Excercise({
    excerciseImage: "/images/male/shoulders/stretches/4.gif",
    excerciseName: "Shoulder Stretch",
    excerciseDesc: "Difficulty: Beginner",
    excerciseCategory: "shoulderStretches",
    step1: "Stand with you feet shoulder width apart. Place one arm across the front of your chest at shoulder height, press the forearm of your other arm above the elbow, hooking the stretching arm with your hand..",
    step2: "Press the arm until it is straight and rotate your upper torso to engage the stretch even deeper.",
    step3: "Repeat with your other arm.",
  }),
  new Excercise({
    excerciseImage: "/images/male/shoulders/bodyweight/1.gif",
    excerciseName: "Elevated Pike Press",
    excerciseDesc: "Difficulty: Intermediate",
    excerciseCategory: "shoulderBodyweight",
    step1: "Use a bench or an object to elevate your feet.",
    step2: "Lower your head towards the floor by bending your elbows",
    step3: "Push through your hands and return to the starting pike position.",
    step4: "Repeat"
  }),
  new Excercise({
    excerciseImage: "/images/male/shoulders/bodyweight/2.gif",
    excerciseName: "Decline Push-Up",
    excerciseDesc: "Difficulty: Beginner",
    excerciseCategory: "shoulderBodyweight",
    step1: "Use a bench or an object to elevate your feet.",
    step2: "Put your hands slightly wider than shoulder-width.",
    step3: "Slowly lower your body until your chest almost touches the ground",
    step4: "Raise your body until you almost lock your elbows."
  }),
  new Excercise({
    excerciseImage: "/images/male/shoulders/bodyweight/3.gif",
    excerciseName: "Bench Dips",
    excerciseDesc: "Difficulty: Beginner",
    excerciseCategory: "shoulderBodyweight",
    step1: "Grip the edge of the bench with your hands, Keep your feet together and legs straight.",
    step2: "Lower your body straight down.",
    step3: "Slowly press back up to the starting point.",
    step4: "TIP: Make this harder by raising your feet off the floor and adding weight."
  }),
  new Excercise({
    excerciseImage: "/images/male/shoulders/bodyweight/4.gif",
    excerciseName: "Elevated Pike Shoulder Shrug",
    excerciseDesc: "Difficulty: Beginner",
    excerciseCategory: "shoulderBodyweight",
    step1: "Use a bench or an object to elevate your feet.",
    step2: "Slowly lower your body (scapula) while keeping your elbows locked (this is key).",
    step3: "Slowly raise your body back to the start position."
  }),
  new Excercise({
    excerciseImage: "/images/male/shoulders/dumbbells/1.gif",
    excerciseName: "Seated Dumbbell Shoulder Press",
    excerciseDesc: "Difficulty: Beginner",
    excerciseCategory: "shoulderDumbbells",
    step1: "Sit on a bench with back support. Raise the dumbbells to shoulder height with your palms forward.",
    step2: "Raise the dumbbells upwards and pause at the contracted position.",
    step3: "Lower the weights back to starting position."

  }),
  new Excercise({
    excerciseImage: "/images/male/shoulders/dumbbells/2.gif",
    excerciseName: "Side Lateral Raises",
    excerciseDesc: "Difficulty: Beginner",
    excerciseCategory: "shoulderDumbbells",
    step1: "Stand up straight with dumbbells at either side, palms facing your hips.",
    step2: "Raise your arms on either side with a slight bend in your elbow until they are parallel with the floor. Pause at the top of the motion..",
    step3: "Slowly return your arms down to starting position."
  }),
  new Excercise({
    excerciseImage: "/images/male/shoulders/dumbbells/3.gif",
    excerciseName: "Front Raises",
    excerciseDesc: "Difficulty: Beginner",
    excerciseCategory: "shoulderDumbbells",
    step1: "Grab two dumbbells while standing upright with the dumbbells at your side.",
    step2: "Raise the two dumbbells with your elbows being fully extended until the dumbbells are eye level.",
    step3: "Lower the weights in a controlled manner to the starting position and repeat."
  }),
  new Excercise({
    excerciseImage: "/images/male/shoulders/dumbbells/4.gif",
    excerciseName: "Seated Bent-Over Rear Delt Fly",
    excerciseDesc: "Difficulty: Intermediate",
    excerciseCategory: "shoulderDumbbells",
    step1: "With dumbbells in either hand, bend your knees with your feet slightly bowed out. Arch your back above your knees, and start with the weights touching in front of your chest.",
    step2: "With bent elbows, raise your arms up to shoulder level, pausing at the at the end of the motion.",
    step3: "Slowly lower your arms back to starting position."
  }),
  new Excercise({
    excerciseImage: "/images/male/shoulders/dumbbells/5.gif",
    excerciseName: "Bent-Over Rear Delt Fly",
    excerciseDesc: "Difficulty: Intermediate",
    excerciseCategory: "shoulderDumbbells",
    step1: "With dumbbells in either hand, bend your knees with your feet slightly bowed out. Arch your back above your knees, and start with the weights touching in front of your chest.",
    step2: "With bent elbows, raise your arms up to shoulder level, pausing at the at the end of the motion.",
    step3: "Slowly lower your arms back to starting position."
  }),
  new Excercise({
    excerciseImage: "/images/male/shoulders/barbell/1.gif",
    excerciseName: "Barbell Overhead Press",
    excerciseDesc: "Difficulty: Advanced",
    excerciseCategory: "shoulderBarbells",
    step1: "Start the barbell across your upper chest below your chin.",
    step2: "Raise the barbell upwards and pause at the contracted position above your head.",
    step3: "Lower the weights back to starting position."
  }),
  new Excercise({
    excerciseImage: "/images/male/shoulders/kettlebells/1.gif",
    excerciseName: "Single Arm Rear Delt Fly",
    excerciseDesc: "Difficulty: Intermediate",
    excerciseCategory: "shoulderKettlebells",
    step1: "Stand with your feet shoulder width apart holding the kettlebell with both hands in front of your thighs.",
    step2: "Bend forward at the hips bringing the kettlebell to the floor while you slightly bend your knees, keeping your back straight.",
    step3: "Bring one arm behind you and rest this arm on your back. With the other arm, hold the kettlebell at arm's length close to the floor.",
    step4: "Swing the kettlebell out and up towards the side of your body and then return to centre. Repeat."
  }),
  new Excercise({
    excerciseImage: "/images/male/shoulders/kettlebells/2.gif",
    excerciseName: "Front Raise",
    excerciseDesc: "Difficulty: Beginner",
    excerciseCategory: "shoulderKettlebells",
    step1: "Stand up straight with feet shoulder width apart, holding the kettlebell in front of your pelvis.",
    step2: "Keeping arms straight, raise the kettlebell slightly higher than head level.",
    step3: "Return to the starting position and repeat."
  }),
  new Excercise({
    excerciseImage: "/images/male/shoulders/kettlebells/3.gif",
    excerciseName: "Rear Delt Row",
    excerciseDesc: "Difficulty: Beginner ",
    excerciseCategory: "shoulderKettlebells",
    step1: "Stand up straight with feet shoulder width apart, holding the kettlebell in front of your pelvis.",
    step2: "Bend forward at the hips bringing the kettlebell to the floor while you slightly bend your knees, keeping your back straight.",
    step3: "Lift the kettlebell upwards towards your upper chest and then lower the kettlebell- repeat."
  }),
  new Excercise({
    excerciseImage: "/images/male/shoulders/kettlebells/4.gif",
    excerciseName: "Long Lever Lateral Raise",
    excerciseDesc: "Difficulty: Intermediate ",
    excerciseCategory: "shoulderKettlebells",
    step1: "Stand with feet shoulder width apart holding a kettlebell with one hand at your side.",
    step2: "Keeping your arm straight, swing the kettlebell up and out, away from your body to around head height, holding on to the kettlebell firmly so it doesn’t change position in your hand.",
    step3: "Return to the starting position and repeat."
  }),
  // ----------

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
