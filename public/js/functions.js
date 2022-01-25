// --------nextsection--------

$(".enter").on("click", function () {
  console.log("hello");
  t1.play();
});

//timeline for select your gender bg

t1 = new TimelineMax({ paused: true });

t1
.to(".genderSection", 1, { top: "0%", ease: Power4.easeOut })
.from(
  ".genderText",
  1,
  { y: "100%", opacity: 0, ease: Power2.easeOut },
  0.5
);
