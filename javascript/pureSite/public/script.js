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

//toggle-btn
const toggleBtn = document.querySelector(".toggle-button");
const toggleBg = document.querySelector(".responsible-bg ");
const sideMenu = document.querySelector(".header-menu");
const popupBtn = document.querySelector(".popup-btn");

toggleBtn.addEventListener("click", () => {
  sideMenu.classList.add("active");
  toggleBg.classList.add("active");
});
popupBtn.addEventListener("click", () => {
  sideMenu.classList.remove("active");
  toggleBg.classList.remove("active");
});

//changeImg

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
const middleTitle = document.querySelectorAll(".middle-title");
const middleImg = document.querySelectorAll(".middle-main-img");
const mainHeight = document.querySelector(".main-sec").clientHeight;
const letEat = document.querySelector(".eat");

document.addEventListener("scroll", () => {
  let test = window.scrollY;
  better.style.left = `-${test * 0.07}%`;
  better.style.opacity = `${(1 / test) * 50}`;
  life.style.left = `${test * 0.08}%`;
  life.style.opacity = `${(1 / test) * 50}`;

  if (test === 0 || test < 50) {
    better.style.opacity = 1;
    life.style.opacity = 1;
    better.style.transform = `scale(1)`;
    life.style.transform = `scale(1)`;
    header.style.top = 0;
  } else if (test > 50 && test < 150) {
    better.style.transform = `scale(${test * 0.015})`;
    life.style.transform = `scale(${test * 0.012})`;
    header.style.top = "-150px";
    middleTitle.forEach((it, i) => {
      it.style.left = "100%";
      it.style.transitionDelay = 0;
      middleImg[i].style.animationDelay = 0;
      middleImg[i].classList.remove("active");
    });
  } else if (test > 150) {
    better.style.opacity = 0;
    if (window.innerWidth < 768) {
      middleTitle.forEach((it, i) => {
        it.style.left = "58%";
        it.style.transitionDelay = `${(i + 1) * 0.5}s`;
        middleImg[i].classList.add("active");
        middleImg[i].style.animationDelay = `${(i + 1) * 0.6}s`;
      });
    } else {
      middleTitle.forEach((it, i) => {
        it.style.left = "74%";
        it.style.transitionDelay = `${(i + 1) * 0.5}s`;
        middleImg[i].classList.add("active");
        middleImg[i].style.animationDelay = `${(i + 1) * 0.6}s`;
      });
    }
  }
});

letEat.addEventListener("click", () => {
  window.scrollTo({
    top: mainHeight + (3.4 * window.innerWidth) / 100,
    behavior: "smooth",
  });
});
