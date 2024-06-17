const header = document.querySelector("header");
const toggleButton = document.querySelector(".toggle-btn");
const navBar = document.querySelector(".nav-bar");
const checkInBtn = document.querySelector(".check-in");
const checkInPerson = document.querySelector(".check-in-person");
const calendar = document.querySelector(".calendar-member");
const checkIn = document.querySelector(".user-check-in");
const checkOut = document.querySelector(".user-check-out");
const userCheckIn = document.querySelector("#check-in-day");
const userCheckOut = document.querySelector("#check-out-day");
const settingBtn = document.querySelector("#setting-btn");
const adultBtnPlus = document.querySelector("#adult button:last-child");
const adultBtnMinus = document.querySelector("#adult button:first-child");
const childBtnPlus = document.querySelector("#child button:last-child");
const childBtnMinus = document.querySelector("#child button:first-child");
const adult = document.querySelector(".adult");
const child = document.querySelector(".child");
const roomType = document.querySelector("#room-type");
const room = document.querySelector(".room-type");

document.addEventListener("scroll", () => {
  if (window.scrollY > 800) {
    console.log("dd");
    header.style.boxShadow = "0px 20px 20px rgba(237, 140, 72, 0.2)";
  } else {
    header.style.boxShadow = "none";
  }
});

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

roomType.addEventListener("click", (e) => {
  room.innerText = roomType.value;
});

settingBtn.addEventListener("click", () => {
  checkIn.innerText = userCheckIn.value;
  checkOut.innerText = userCheckOut.value;
  room.innerText = roomType.value;
  calendar.classList.remove("active");
});

let i = 1;
let j = 1;
adultBtnPlus.addEventListener("click", () => {
  i++;
  adult.innerText = i;
});
adultBtnMinus.addEventListener("click", () => {
  if (i > 1) {
    i--;
    adult.innerText = i;
  }
});
childBtnPlus.addEventListener("click", () => {
  j++;
  child.innerText = j;
});
childBtnMinus.addEventListener("click", () => {
  if (j > 1) {
    j--;
    child.innerText = j;
  }
});
