//option-nav
const optionMenu = document.querySelector(".option-menu");
const optionList = document.querySelector(".option-menu ul");
const optionLists = document.querySelectorAll(".option-menu li");

optionMenu.addEventListener("click", () => {
  optionList.classList.toggle("active");
  optionLists.forEach((it) => {
    it.classList.toggle("active");
  });
});

//brand-nav
const brand = document.querySelector(".brand");
const brandMenu = document.querySelector(".brandMenu");

brandMenu.addEventListener("mouseover", () => {
  brand.classList.add("active");
});
brand.addEventListener("mouseleave", () => {
  brand.classList.remove("active");
});

//changeImg
//
const changeImg = document.querySelector(".changeImg");

const imgArr = [
  "./img/brand-main-img1.png",
  "./img/brand-main-img2.png",
  "./img/brand-main-img3.png",
  "./img/brand-main-img4.png",
  "./img/brand-main-img5.png",
  "./img/brand-main-img6.png",
  "./img/brand-main-img7.png",
];

console.log(changeImg.src);
let i = 0;
const changeSrc = () => {
  changeImg.src = imgArr[i];
  i = (i + 1) % imgArr.length;
};

setInterval(changeSrc, 500);

//스크롤 이벤트

const better = document.querySelector(".better");
const life = document.querySelector(".letter");
const header = document.querySelector("header");
const middleTitle = document.querySelectorAll(".middle-title")[0];
const middleImg = document.querySelector(".middle-main-img");
const mainHeight = document.querySelector(".main-sec").clientHeight;

console.log(middleTitle);
document.addEventListener("scroll", () => {
  let test = window.scrollY;
  better.style.left = `-${test * 0.07}%`;
  better.style.opacity = `${(1 / test) * 50}`;
  life.style.left = `${test * 0.08}%`;
  life.style.opacity = `${(1 / test) * 50}`;

  console.log(mainHeight, test, middleTitle);
  if (test === 0 || test < 50) {
    better.style.opacity = 1;

    better.style.transform = `scale(1)`;
    life.style.transform = `scale(1)`;
    header.style.top = 0;
  } else if (test > 50 && test < 150) {
    better.style.transform = `scale(${test * 0.015})`;
    life.style.transform = `scale(${test * 0.012})`;
    header.style.top = "-150px";
  } else if (test > 150) {
    better.style.opacity = 0;
    middleTitle.style.left = "70%";
  }
});
