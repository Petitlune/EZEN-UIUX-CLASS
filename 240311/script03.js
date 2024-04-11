const slides = document.querySelector(".slides");
const slide = slides.querySelectorAll("li");
const slideCount = slide.length;
console.log(slideCount); // 전역요소에서 li 태그 갯수 5개
const slideWidth = 200;
const sliedMargin = 30;
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
console.log(prevBtn);

//최초 인덱스 값
let currentIdx = 0;

//li 스타일 셋팅

const updateWidth = () => {
  const currentSlides = document.querySelectorAll(".slides li");
  const newSlideCount = currentSlides.length;
  console.log(newSlideCount); // 복제한 후에 li 태그 갯수 10개
  const newWidth = `${
    (slideWidth + sliedMargin) * newSlideCount - sliedMargin
  }px`;
  slides.style.width = newWidth;
};

//초기값 세팅
const setInitialPos = () => {
  const initialTranslateValue = -(slideWidth + sliedMargin) * slideCount;
  slides.style.transform = `translateX(${initialTranslateValue}px)`;
};

const makeClone = () => {
  for (let i = 0; i < slideCount; i++) {
    const clonSlide = slide[i].cloneNode(true);
    clonSlide.classList.add("clone");
    slides.appendChild(clonSlide);
  } // cloneNode는 노드를 복제하라는 함수
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
//매개변수 이름을 참조변수명으로 num
//누를때마다 해당 숫자 만큼 왼쪽으로 100% 가야함
const moveSlide = (num) => {
  slides.style.left = `${-num * (slideWidth + sliedMargin)}px`;
  currentIdx = num;
  if (currentIdx === slideCount || currentIdx === -slideCount) {
    setTimeout(() => {
      slides.classList.remove("animated");
      slides.style.left = "0px";
      currentIdx = 0;
    }, 500);
    setTimeout(() => {
      slides.classList.add("animated");
    }, 600);
  }
  console.log(currentIdx, slideCount);
};

// prevBtn.addEventListener("click"),
//   () => {
//     moveSlide(currentIdx - 1);
//   };

nextBtn.addEventListener("click", () => {
  moveSlide(currentIdx + 1);
});
prevBtn.addEventListener("click", () => {
  moveSlide(currentIdx - 1);
});
