// --------nextsection--------

$(".enter").on("click", function () {
  t2.play();
});

$(".genderSelect").on("click", function () {
  t5.play();
});

$(".back1").on("click", function () {
  t2.reverse();
});

//timeline for select your gender bg
// var genEle = $(".genderSection").parent().height()
// console.log(($(".genderSection").css('top').slice(0,-2)/genEle)*100);

t2 = new TimelineMax({ paused: true });

t2.to(".genderSection", 1, { top: "0%", ease: Power4.easeOut })
  .from(".genderText", 1, { y: "100%", opacity: 0, ease: Power2.easeOut }, 0.5)
  .from(".selRad", 1, { x: "-100%", opacity: 0, ease: Power3.easeOut }, 1.25)
  .from(".genderLabel", 1, { x: "7%", opacity: 0, ease: Power3.easeOut }, 1.2)
  .from(".back1", 0.7, { display: "none" })
  .from(
    ".musclePick",
    1.25,
    { y: "100%", opacity: 0, ease: Power3.easeOut },
    0
  );

  t5 = new TimelineMax({ paused: true });

t5.to(".genderSection", 1, { top: "0%", ease: Power4.easeOut });
  

//directory text

t3 = new TimelineMax({});

t3.from(".dirText", {
  duration: 1.5,
  y: "100%",
  ease: Power4.easeOut,
  stagger: 0.1,
  delay: 1
});

// Radio Button is checked

t4 = new TimelineMax({ paused: true });

t4.to(".musclePick", 1, { top: "0%", ease: Power4.easeOut }).from(
  ".back2",
  0.7,
  { display: "none" }
);

// $("input[type=radio]").click(function () {
//   if ($(this).prop("checked")) {
//     t4.play();
//   }
// });
$(".muscle-map").hide();
$(".f-muscle-map").hide();
$("input[type=radio][name=gender][value='male']").click(function () {
  t4.play();
  $(".muscle-map").show();
  $(".f-muscle-map").hide();
});

$("input[type=radio][name=gender][value='female']").click(function () {
  t4.play();
  $(".f-muscle-map").css("display","block");
  $(".muscle-map").css("display","none");
})

$(".back2").on("click", function () {
  t4.reverse();
});



t6 = new TimelineMax({ paused: true });

t6.to(".userDetails", 1, { top: "0%", ease: Power4.easeOut }).from(
    ".back2",
    0.7,
    // { display: "none" }
  );

  $("input[type=radio]").click(function () {
    if ($(this).prop("checked")) {
      t6.play();
      console.log("frfr");
    }
  });

  


 