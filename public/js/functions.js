// --------nextsection--------

$(".enter").on("click", function () {
  console.log("hello");
  t2.play();
});

$(".back").on("click", function () {
  console.log("hello");
  t2.reverse();
});

//timeline for select your gender bg

t2 = new TimelineMax({ paused: true });

t2.to(".genderSection", 1, { top: "0%", ease: Power4.easeOut })
  .from(".genderText", 1, { y: "100%", opacity: 0, ease: Power2.easeOut }, 0.5)
  .from(".selRad", 1, { x: "-100%", opacity: 0, ease: Power3.easeOut }, 1.25)
  .from(".genderLabel", 1, { x: "7%", opacity: 0, ease: Power3.easeOut }, 1.2)
  .from(".back", 0.7, { opacity: 0 });

//directory text

t3 = new TimelineMax({});

t3.from(".dirText", {
  duration: 1.5,
  y: "100%",
  ease: Power4.easeOut,
  stagger: 0.1,
});
