//Portfolio color change
const body = document.querySelector("body");
const wrap = document.querySelector(".wrap");
const colorChangeList = document.querySelectorAll(".colors");
const colorTextChangeList = document.querySelectorAll(".colorstext");
const colorSet = document.querySelector(".color-setting");
const colorBox = document.querySelector(".color-select-box");
const colorBtn = document.querySelectorAll(".select-color");

const colorArray = ["3f51b5", "00a73e", "ff9801", "ea1e63"];

colorSet.addEventListener("click", () => {
  colorBox.classList.toggle("active");

});
console.log(colorSet);
wrap.addEventListener("click", (e) => {
  if (e.target !== colorSet) {
    colorBox.classList.remove("active");
  }
});

colorBtn.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    colorChangeList.forEach((item) => {
      item.style.background = `#${colorArray[i]}`;
      item.style.borderColor = `#${colorArray[i]}`;
    });
    colorTextChangeList.forEach((item) => {
      item.style.color = `#${colorArray[i]}`;
    });
    colorBox.classList.remove("active");
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

const modalList = document.querySelectorAll(".modalList");
const projectSection = document.querySelector(".project");
const modalScreen = document.querySelectorAll(".modalScreen");
const modalCloseBtn = document.querySelectorAll(".modalCloseBtn");
const modalBg = document.querySelectorAll(".modalback");

modalList.forEach((item, i) => {
  item.addEventListener("click", () => {
    modalScreen[i].style.display = "flex";
    modalBg[i].style.display = "flex";
    body.style.overflowY = "hidden";
  });
  modalCloseBtn[i].addEventListener("click", () => {
    modalScreen[i].style.display = "none";
    modalBg[i].style.display = "none";
    body.style.overflowY = "auto";
  });
});

// example menu
const exList = document.querySelectorAll(".ex-menu li span");

exList.forEach((li) => {
  li.addEventListener("click", () => {
    exList.forEach((li) => {
      li.classList.remove("active");
    });

    li.classList.add("active");
  });
});
