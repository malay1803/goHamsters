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
  }),
  new Excercise({
    excerciseImage: "/images/male/shoulder/stretches/2.gif",
    excerciseName: "Traps Stretch 2",
    excerciseDesc: "excercise for shoulder 2",
  }),
  new Excercise({
    excerciseImage: "/images/male/shoulder/stretches/3.gif",
    excerciseName: "Traps Stretch 3",
    excerciseDesc: "excercise for shoulder 3",
  }),
];

var done = 0;
for (var i = 0; i < excercises.length; i++) {
  console.log(excercises[i]);
  excercises[i].save((err, result) => {
    done++;
    console.log(done);
    if (done === excercises.length) {
      disconnect();
    }
  });
}

function disconnect() {
  mongoose.disconnect();
}
