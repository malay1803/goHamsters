

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
    const sel=$('#frequency').val()
    let BMR
    console.log("hello2",age)
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
}

