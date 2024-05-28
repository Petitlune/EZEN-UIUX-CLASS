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
let changeImg = document.querySelector(".changeImg").src;

const imgArr = [
  "brand-main-img1.png",
  "brand-main-img2.png",
  "brand-main-img3.png",
  "brand-main-img4.png",
  "brand-main-img5.png",
  "brand-main-img6.png",
  "brand-main-img7.png",
];

for (let i = 0; i < imgArr; i++) {
  imgUrl = imgArr[i];
  changeImg = imgUrl;
}

console.log(changeImg);
