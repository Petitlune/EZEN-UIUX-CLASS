const colorChangeList = document.querySelectorAll("#colors");
const colorTextChangeList = document.querySelectorAll("#colorstext");
const colorBtn = document.querySelector(".colorChange");
console.log(colorChangeList);

const color = ["yellowgreen", "red", "gray"];

colorBtn.addEventListener("click", () => {
  colorChangeList.forEach((item, i) => {
    item.style.background = "#00A73E";
    item.classList.remove = "active";
  });
  colorTextChangeList.forEach((item, i) => {
    item.style.color = "#00A73E";
  });
});

//skill-section
const dewDrop = document.querySelector(".ani-dew");
const skillDescription = document.querySelectorAll("     .skill-desc");

dewDrop.addEventListener("click", () => {
  dewDrop.classList.toggle("active");
  skillDescription.forEach((item) => {
    item.classList.toggle("active");
  });
});

//project-section
const body = document.querySelector("body");
const modalList = document.querySelectorAll(".modalList");
const projectSection = document.querySelector(".project");
const modalScreen = document.querySelectorAll(".modalScreen");
const modalCloseBtn = document.querySelectorAll(".modalCloseBtn");

modalList.forEach((item, i) => {
  item.addEventListener("click", () => {
    modalScreen[i].style.display = "flex";
    body.style.overflowY = "hidden";
  });
  modalCloseBtn[i].addEventListener("click", () => {
    modalScreen[i].style.display = "none";
    body.style.overflowY = "auto";
  });
});

modalList.forEach((item) => {
  item.addEventListener("mouseenter", () => {
    item.classList.add("active");
  });
  item.addEventListener("mouseleave", () => {
    item.classList.remove("active");
  });
});
