// --------nextsection--------

$(".enter").on("click", function () {
  console.log("hello");
  t2.play();
});

//timeline for select your gender bg

t2 = new TimelineMax({ paused: true });

t2.to(".genderSection", 1, { top: "0%", ease: Power4.easeOut })
  .from(".genderText", 1, { y: "100%", opacity: 0, ease: Power2.easeOut }, 0.5)
  .from(".selRad", 1, { x: "-100%", opacity: 0, ease: Power3.easeOut}, 1.25)
  .from(".genderLabel", 1, { x: "7%", opacity: 0, ease: Power3.easeOut}, 1.2)
  .from('.back', .7, {opacity:0})
