const colorChangeList = document.querySelectorAll("#colors");
const colorTextChangeList = document.querySelectorAll("#colorstext");
const colorSet = document.querySelector(".color-setting");
const colorBox = document.querySelector(".color-select-box");
const colorBtn = document.querySelectorAll(".select-color");

const colorArray = ["3f51b5", "00a73e", "ff9801", "ea1e63"];

colorSet.addEventListener("click", () => {
  colorBox.classList.toggle("active");
});

colorBtn.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    console.log(colorChangeList);
    colorChangeList.forEach((item) => {
      item.style.background = `#${colorArray[i]}`;
    });
    colorTextChangeList.forEach((item) => {
      item.style.color = `#${colorArray[i]}`;
    });
  });
});

//skill-section
const dewDrop = document.querySelector(".ani-dew");
const skillDescription = document.querySelectorAll(".skill-desc");

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

modalList.forEach((item) => {
  item.addEventListener("click", () => {
    modalScreen[i].style.display = "flex";
    body.style.overflowY = "hidden";
  });
  modalCloseBtn[i].addEventListener("click", () => {
    modalScreen[i].style.display = "none";
    body.style.overflowY = "auto";
  });
});

// modalList.forEach((item) => {
//   item.addEventListener("mouseenter", () => {
//     item.style.backgroundColor = `#${colorArray[i]}`;
//   });
//   item.addEventListener("mouseleave", () => {
//     item.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
//   });
// });
