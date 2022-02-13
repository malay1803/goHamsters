

$("#slider1").roundSlider({
    circleShape:"half", 
    radius:90,
    width:20,
    min:1,
    max:100,
    rangeColor:"#30475E",
    pathColor:"#f05454",
    change: function (e) {
        console.log("hello1", e.value)
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
        console.log("hello1", e.value)
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
        console.log("hello1", e.value)
        $('.weightValue').html(e.value)
    }
});

// CALCULATION
console.log($('input[name="gender"]:checked').val())

$(".gender").on("click", ()=>{
    
    const gender=$('input[name="gender"]:checked').val()
    const age= $('.ageValue').text()
    const height= $('.heightValue').text()
    const weight= $('.weightValue').text()
    let BMR

    console.log("hello2",age)
    if(gender==="male"){
        BMR = Math.ceil( (10 * weight) + (6.25 * height) - (5 * age) + 5 )
        console.log(BMR)
    }
    else if(gender==="female"){
        BMR = Math.ceil( (10 * weight) + (6.25 * height) - (5 * age) - 161 )
        console.log(BMR)
    }

})

