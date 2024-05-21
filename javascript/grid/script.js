const toggleButton = document.querySelector(".toggle-btn");
const navBar = document.querySelector(".nav-bar");
const checkInBtn = document.querySelector(".check-in");
const checkInPerson = document.querySelector(".check-in-person");
const calendar = document.querySelector(".calendar-member");

console.log(checkInPerson, navBar);
toggleButton.addEventListener("click", () => {
  toggleButton.classList.toggle("active");
  navBar.classList.toggle("active");
});

checkInBtn.addEventListener("click", () => {
  calendar.classList.toggle("active");
});
checkInPerson.addEventListener("click", () => {
  calendar.classList.toggle("active");
});
