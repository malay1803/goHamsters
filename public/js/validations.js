function signinCheck(){
    let inEmail = $("#inEmail").val()
    let inPassword = $("#inPass").val()
    let count = 0
  
    $(".errorMessage").remove()
    
    if(inEmail===""){
      $("#inEmailDiv").append(`<div class="errorMessage">Email can't be empty.</div>`)
    }
    else if( !(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(inEmail))){
      $("#inEmailDiv").append(`<div class="errorMessage">You have entered an invalid email address!</div>`)
    }else{
      count+=1
    }
  
    if(inPassword===""){
      $("#inPassword").append(`<div class="errorMessage">Password can't be empty.</div>`)
    }
    else if(!(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(inPassword))){
      $("#inPassword").append(`<div class="errorMessage">Invalid password.</div>`)
    }else{
      count+=1
    }
    if(count===2){
      return true
    }else{
      return false
    }
  }
  
  function signupCheck(){
    let email = $("#signUpEmail").val()
    let firstName = $("#firstName").val()
    let lastName = $("#lastName").val()
    let password = $("#password").val()
    let confirmPassword = $("#confirmPassword").val()
    let count = 0
    
    $(".errorMessage").remove()
  
    if(firstName===""){
      $("#upFirstName").append(`<div class="errorMessage">First Name can't be empty.</div>`)
    }
    else if(firstName.length<4){
      $("#upFirstName").append(`<div class="errorMessage">First Name should more than 4 characters.</div>`)
    }
    else if(firstName.length>16){
      $("#upFirstName").append(`<div class="errorMessage">First Name should be less than 16 characters.</div>`)
    }else{
      count+=1
    }
    
    if(lastName===""){
      $("#upLastName").append(`<div class="errorMessage">Last Name can't be empty.</div>`)
    }
    else if(lastName.length<4){
      $("#upLastName").append(`<div class="errorMessage">Last Name should more than 4 characters.</div>`)
    }
    else if(lastName.length>16){
      $("#upLastName").append(`<div class="errorMessage">Last Name should be less than 16 characters.</div>`)
    }else{
      count+=1
    }
  
    if(email===""){
      $("#upEmail").append(`<div class="errorMessage">Email can't be empty.</div>`)
    }
    else if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))){
      $("#upEmail").append(`<div class="errorMessage">You have entered an invalid email address!</div>`)
    }else{
      count+=1
    }
    
    if(password===""){
      $("#upPassword").append(`<div class="errorMessage">Password can't be empty.</div>`)
    }
    else if(!(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password))){
      $("#upPassword").append(`<div class="errorMessage">Min 8 characters, 1 letter and 1 number.</div>`)
    }else{
      count+=1
    }
  
    if(confirmPassword===""){
      $("#upConfirmPassword").append(`<div class="errorMessage">Confirm Password can't be empty.</div>`)
    }
    else if(confirmPassword!==password){
      $("#upConfirmPassword").append(`<div class="errorMessage">Confirm Password is not same as password.</div>`)
    }else{
      count+=1
    }
    
    if(count===5){
      return true
    }else{
      return false
    }
  }

