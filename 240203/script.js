const header = document.querySelector("header");
const famoon = document.querySelector("i");
const btn = document.querySelector(".btn");
const button = document.querySelector(".trigger");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    famoon.classList.add("active");
  } else {
    famoon.classList.remove("active");
  }
});
button.addEventListener("click", () => {
  btn.classList.toggle("active");
});
