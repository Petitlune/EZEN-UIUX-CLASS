const slides = document.querySelector(".slides");
const slide = slides.querySelectorAll("li");
const slideCount = slide.length;

const slidesWidth = 1440;
const slidesMargin = 80;
// console.log(slidesWidth);
// window.addEventListener("resize", () => {
//   const slidesWidth = imgWidth.width;
// });

const nextBtn = document.querySelector(".first-next");
const prevBtn = document.querySelector(".first-prev");
// const pageNum = document.querySelector(".pageNum ");
// const pagetotalNum = slide.length;
// const currentNum = document.querySelector("#currentNum");
// const lastNum = document.querySelector("#lastNum");

//초기값 셋팅
let currentIdx = 0;
const updateWidth = () => {
  const currentSlides = document.querySelectorAll(".slides li");
  const newSlideCount = currentSlides.length;

  const newWidth = `${
    (slidesWidth + slidesMargin) * newSlideCount - slidesMargin
  }px`;

  slides.style.width = newWidth;
};

const setStart = () => {
  const startleft = -(slidesWidth + slidesMargin) * slideCount;
  console.log(startleft);

  slides.style.transform = `translateX(${startleft}px)`;
  // currentNum.innerText = currentIdx + 1;
  // lastNum.innerText = slideCount;
};

//앞뒤로 노드 복제
const makeClone = () => {
  for (let i = 0; i < slideCount; i++) {
    const cloneSlide = slide[i].cloneNode(true);
    cloneSlide.classList.add("clone");
    slides.appendChild(cloneSlide);
  }
  for (let i = slideCount - 1; i >= 0; i--) {
    const cloneSlide = slide[i].cloneNode(true);
    cloneSlide.classList.add("clone");
    slides.prepend(cloneSlide);
  }
  updateWidth();
  setStart();
};
makeClone();

//무한 슬라이드 셋팅

const moveSlide = (num) => {
  slides.style.transform = `translateX(${
    -num * (slidesWidth + slidesMargin)
  }px)`;
  currentIdx = num;
};

prevBtn.addEventListener("click", () => {
  moveSlide(currentIdx - 1);
  slides.classList.add("animated");
});

nextBtn.addEventListener("click", () => {
  moveSlide(currentIdx + 1);
  slides.classList.add("animated");
});

const autoSlide = () => {
  timer = setInterval(() => {
    moveSlide(currentIdx + 1);
    slides.classList.add("animated");
  }, 5000);
};

autoSlide();
const bookTitle = document.querySelectorAll(".book-tit");
const bookTitleHover = document.querySelectorAll("#book-tit-hover");

bookTitle.forEach((item, i) => {
  bookTitleHover[i].innerText = item.innerText;
});
