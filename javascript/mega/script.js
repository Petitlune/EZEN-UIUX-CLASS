const slides = document.querySelector(".slides");
const slide = slides.querySelectorAll("li");
const slideCount = slide.length;
const slidesWidth = 1440;
const slidesMargin = 80;
const nextBtn = document.querySelector(".first-next");
const prevBtn = document.querySelector(".first-prev");
const pageNum = document.querySelector(".pageNum ");
const pagetotalNum = slide.length;
const currentNum = document.querySelector("#currentNum");
const lastNum = document.querySelector("#lastNum");
let currentIdx = 0;

const updateWidth = () => {
  const currentSlides = document.querySelectorAll(".slides li");
  const newSlideCount = currentSlides.length;
  console.log(newSlideCount); // 복제한 후에 li 태그 갯수 10개
  const newWidth = `${
    (slidesWidth + slidesMargin) * newSlideCount - slidesMargin
  }px`;
  slides.style.width = newWidth;
};

//초기값 셋팅

const setStart = () => {
  const startleft = -(slidesWidth + slidesMargin) * slideCount;
  slides.style.transform = `translateX(${startleft}px)`;
  console.log(startleft);
  currentNum.innerText = currentIdx + 1;
  lastNum.innerText = slideCount;
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
  slides.style.transform = `translateX(${-num * 1520 - 13680}px)`;
  currentIdx = num;
  if (currentIdx === slideCount || currentIdx === -slideCount) {
    setTimeout(() => {
      slides.classList.remove("animated");
      setStart();
    }, 1000);
    currentNum.innerText = currentIdx + 1;
    currentIdx = 0;
  }
  console.log(currentIdx);
};

const autoSlide = () => {
  auto = setInterval(() => {
    slides.classList.add("animated");
    moveSlide(currentIdx + 1);

    currentNum.innerText = currentIdx + 1;
  }, 5000);
};

autoSlide();

const stopSlide = () => {
  clearInterval(auto);
};

// 최종 이벤트 리스너
slides.addEventListener("mouseenter", stopSlide);
slides.addEventListener("mouseleave", autoSlide);
nextBtn.addEventListener("mouseenter", stopSlide);
nextBtn.addEventListener("mouseleave", autoSlide);
prevBtn.addEventListener("mouseenter", stopSlide);
prevBtn.addEventListener("mouseleave", autoSlide);

nextBtn.addEventListener("click", () => {
  if (currentIdx < slideCount) {
    slides.classList.add("animated");
    moveSlide(currentIdx + 1);
    currentNum.innerText = currentIdx + 1;
  }
});
prevBtn.addEventListener("click", () => {
  if (-slideCount < currentIdx) {
    slides.classList.add("animated");
    moveSlide(currentIdx - 1);
    //하단 slideNumber 표시
    if (currentIdx < 0) {
      currentNum.innerText = currentIdx + slideCount + 1;
    } else {
      currentNum.innerText = currentIdx + 1;
    }
  }
});

const bookTitle = document.querySelectorAll(".book-tit");
const bookTitleHover = document.querySelectorAll("#book-tit-hover");

bookTitle.forEach((item, i) => {
  bookTitleHover[i].innerText = item.innerText;
});
