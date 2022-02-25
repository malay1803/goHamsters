calcHeading = new TimelineMax({});

calcHeading.from(".calculatorText", {
  duration: 1.5,
  y: "100%",
  ease: Power4.easeOut,
  stagger: 0.1,
  delay: 1
});

$("#slider1").roundSlider({
    circleShape:"half", 
    radius:90,
    width:20,
    min:1,
    max:100,
    rangeColor:"#30475E",
    pathColor:"#f05454",
    change: function (e) {
        $('.ageValue').html(e.value)
    }
});
$("#slider2").roundSlider({
    circleShape:"half", 
    radius:90,
    width:20,
    handleSize:20,
    min:1,
    max:200,
    rangeColor:"#30475E",
    pathColor:"#f05454",
    change: function (e) {
        $('.heightValue').html(e.value)
    }
});
$("#slider3").roundSlider({
    circleShape:"half", 
    radius:90,
    width:20,
    handleSize:20,
    min:1,
    max:150,
    rangeColor:"#30475E",
    pathColor:"#f05454",
    change: function (e) {
        $('.weightValue').html(e.value)
    }
});

// CALCULATION

function CalCalculator(){
    const gender=$('input[name="gender"]:checked').val()
    const age= $('.ageValue').text()
    const height= $('.heightValue').text()
    const weight= $('.weightValue').text()
    const sel=$("input[type='radio'][name='category']:checked").val()
    // const gender=$("input[type='radio'][name='gender']:checked").val()
    let BMR
    console.log(gender)
    console
    if(gender==="male"){
        BMR = ( (10 * weight) + (6.25 * height) - (5 * age) + 5 )
    }
    else if(gender==="female"){
        BMR = Math.ceil( (10 * weight) + (6.25 * height) - (5 * age) - 161 ) 
    }
    if(sel==1){
        BMR = BMR*1; 
    }
    else if(sel==1.2){
        BMR = BMR*1.2;
    }
    else if(sel==1.375){
        BMR = BMR*1.375;
    }
    else if(sel==1.465){
        BMR = BMR*1.465;
    }
    else if(sel==1.55){
        BMR = BMR*1.55;
    }
    else if(sel==1.725){
        BMR = BMR*1.725;
    }
    else if(sel==1.9){
        BMR = BMR*1.9;
    }
    $('#resultBMR').html(Math.ceil(BMR))
    $('.gain').html(Math.ceil(1.2*BMR))
    $('.mildgain').html(Math.ceil(1.1*BMR))
    $('.maintain').html(Math.ceil(BMR))
    $('.mildloss').html(Math.ceil(0.9*BMR))
    $('.loss').html(Math.ceil(0.8*BMR))
    $("#infoDiv").fadeToggle();
}

const selected = document.querySelector(".selected");
const optionsContainer = document.querySelector(".options-container");

const optionsList = document.querySelectorAll(".option");

selected.addEventListener("click", () => {
  optionsContainer.classList.toggle("active");
});

optionsList.forEach(o => {
  o.addEventListener("click", () => {
    selected.innerHTML = o.querySelector("label").innerHTML;
    optionsContainer.classList.remove("active");
  });
});


// const selected1 = document.querySelector(".selected1");
// const optionsContainer1 = document.querySelector(".options-container1");

// const optionsList1 = document.querySelectorAll(".option1");

// selected1.addEventListener("click", () => {
//   optionsContainer1.classList.toggle("active");
// });

// optionsList1.forEach(o => {
//   o.addEventListener("click", () => {
//     selected1.innerHTML = o.querySelector("label").innerHTML;
//     optionsContainer1.classList.remove("active");
//   });
// });

