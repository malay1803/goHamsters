const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".loginContainer");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
  console.log("nfenf");
});
sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});
$('#forget').hide();
function forgetPassword(){
  $('#hideDiv').hide();
  $('#forget').show();
}

function forgetPasswordr(){
  $('#hideDiv').show();
  $('#forget').hide();
}

