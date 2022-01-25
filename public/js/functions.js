// --------nextsection--------

$(".enter").on('click', function(){
  console.log("hello")
  genderSection()
})

function genderSection(){
  gsap.to(".genderSection", 1, {top: "0%"})
}
