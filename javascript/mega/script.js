const slides = document.querySelector(".slides");
const slide = document.querySelectorAll(".slides li");
const slideCount = slide.length;
const slideWidth = slide[0].clientWidth;
const sliedMargin = 80;
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const currentNum = document.querySelector("#currentNum");
const lastNum = document.querySelector("#lastNum");

let currentIdx = 0;

const updateWidth = () => {
  const currentSlides = document.querySelectorAll(".slides li");
  const newSlideCount = currentSlides.length;
  const newWidth = `${
    (slideWidth + sliedMargin) * newSlideCount - sliedMargin
  }px`;
  slides.style.width = newWidth;
};

const setInitialPos = () => {
  const initialTranslateValue = -(slideWidth + sliedMargin) * slideCount;
  slides.style.transform = `translateX(${initialTranslateValue}px)`;
  currentNum.innerText = (currentIdx % slideCount) + 1;
  lastNum.innerText = slideCount;
};

const makeClone = () => {
  for (let i = 0; i < slideCount; i++) {
    const clonSlide = slide[i].cloneNode(true);
    clonSlide.classList.add("clone");
    slides.appendChild(clonSlide);
  }
  for (let i = slideCount - 1; i >= 0; i--) {
    const cloneSlide = slide[i].cloneNode(true);
    cloneSlide.classList.add("clone");
    slides.prepend(cloneSlide);
  }
  updateWidth();
  setInitialPos();
  setTimeout(() => {
    slides.classList.add("animated");
  }, 100);
};

makeClone();

const moveSlide = (num) => {
  slides.style.left = `${-num * (slideWidth + sliedMargin)}px`;
  currentIdx = num;
  if (currentIdx === slideCount || currentIdx === -slideCount) {
    setTimeout(() => {
      slides.classList.remove("animated");
      slides.style.left = "0px";
      currentIdx = 0;
      currentNum.innerText = (currentIdx % slideCount) + 1;
    }, 500);
    setTimeout(() => {
      slides.classList.add("animated");
    }, 600);
  }
};

prevBtn.addEventListener("click", () => {
  moveSlide(currentIdx - 1);
  console.log(currentIdx);
  if (currentIdx > 0) {
    currentNum.innerText = (currentIdx % slideCount) + 1;
  } else if (currentIdx === 0) {
    currentNum.innerText = 1;
  } else {
    currentNum.innerText = currentIdx + 10;
  }
});

nextBtn.addEventListener("click", () => {
  moveSlide(currentIdx + 1);
  if (currentIdx < 0) {
    currentNum.innerText = currentIdx + 10;
  } else {
    currentNum.innerText = (currentIdx % slideCount) + 1;
  }
});
//auto slide
const autoSlide = () => {
  timer = setInterval(() => {
    moveSlide(currentIdx + 1);

    currentNum.innerText = (currentIdx % slideCount) + 1;
  }, 3000);
};

autoSlide();

const stopSlide = () => {
  clearInterval(timer);
};
slides.addEventListener("mouseenter", stopSlide);
slides.addEventListener("mouseleave", autoSlide);
prevBtn.addEventListener("mouseenter", stopSlide);
prevBtn.addEventListener("mouseleave", autoSlide);
nextBtn.addEventListener("mouseenter", stopSlide);
nextBtn.addEventListener("mouseleave", autoSlide);

//Book title
const bookTitle = document.querySelectorAll(".book-tit");
const bookTitleHover = document.querySelectorAll("#book-tit-hover");

bookTitle.forEach((item, i) => {
  bookTitleHover[i].innerText = item.innerText;
});
