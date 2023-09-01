const signUpBtn = document.querySelector(".sign-up-btn");
const loggInBtn = document.querySelector(".logg-in-btn");
const aSignUpBox = document.querySelector(".authentication-sign-up-box");
const aLoggInBox = document.querySelector(".authentication-logg-in-box");

signUpBtn.addEventListener("click", () => {
  console.log("hellu");
  aSignUpBox.classList.toggle("d-none");
  aLoggInBox.classList.toggle("d-none");
});

loggInBtn.addEventListener("click", () => {
  console.log("hellu");
  aSignUpBox.classList.toggle("d-none");
  aLoggInBox.classList.toggle("d-none");
});
