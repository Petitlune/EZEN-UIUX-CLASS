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

// example-section
const exList = document.querySelectorAll(".ex-menu li span");
const exContents = document.querySelectorAll(".ex-box-wrap");

exList.forEach((li, i) => {
  li.addEventListener("click", () => {
    exList.forEach((li, j) => {
      li.classList.remove("active");
      exContents[j].classList.remove("active");
    });

    li.classList.add("active");
    exContents[i].classList.add("active");
  });
});

//scrollTo event
const navMenu = document.querySelectorAll(".gnb li");
const sections = document.querySelectorAll(".section");
const goToTop = document.querySelector(".gotoTop");

navMenu.forEach((menu, i) => {
  menu.addEventListener("click", () => {
    window.scrollTo({
      top: sections[i].offsetTop - 50,
      behavior: "smooth",
    });
  });
});

goToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

const iframURL = [
  "https://flex-hompage-petit.web.app",
  "https://grid-hompage-petit.web.app",
  "https://css-project02-petit.web.app",
  "https://calendar-petit.web.app",
  "https://accordion-ui-petit.web.app",
  "https://filter-petit.web.app",
  "https://loginform-petit.web.app",
  "https://matching-member-petit.web.app",
  "https://mobile-wedding-petit.web.app",
  "https://react-shoppingmall-petit.web.app",
];

const examModal = document.querySelectorAll(".ex-box-wrap li");
const modalFull = document.querySelector(".modal-full");
const modalClose = document.querySelector(" .modal-close-btn ");
const modalView = document.querySelector("#my-modal iframe");

examModal.forEach((exam, i) => {
  exam.addEventListener("click", () => {
    modalFull.style.display = "flex";
    modalView.src = iframURL[i];
    body.style.overflowY = "hidden";
  });
});

modalClose.addEventListener("click", () => {
  modalFull.style.display = "none";
  body.style.overflowY = "auto";
});
