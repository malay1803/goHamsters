window.onscroll = function() {
    console.log("hello deer");
    myFunction()};

var navbar = document.getElementsByClassName("navbar");

var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

// --------nextsection--------

var enter = $('.circle1');
var page = $('.page');
