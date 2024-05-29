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
