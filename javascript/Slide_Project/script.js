const slides = document.querySelector("ul");
const slide = slides.querySelectorAll("li");
const slideCount = slide.length;
const slidesWidth = 750;
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let currentIdx = 0;
//초기값 세팅
const setStart = () => {
  const startleft = -slidesWidth * slideCount;
  slides.style.transform = `translate(${startleft}px)`;
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
  setStart();
};
makeClone();
//무한 슬라이드 세팅
const moveSlide = (num) => {
  slides.style.left = `${-num * slidesWidth}px`;
  currentIdx = num;
  if (currentIdx === slideCount || currentIdx === -slideCount) {
    setTimeout(() => {
      slides.classList.remove("animated");
      slides.style.left = "0px";
      currentIdx = 0;
    }, 300);
  }
};
// const nextSlide = () => {
//   for (let num = 1; num < slideCount; i++) {
//     makeClone(num);
//   }
// };
// let loopInterval = setInterval(() => {
//   nextSlide();
// }, 3000);
nextBtn.addEventListener("click", () => {
  slides.classList.add("animated");
  moveSlide(currentIdx + 1);
});
prevBtn.addEventListener("click", () => {
  slides.classList.add("animated");
  moveSlide(currentIdx - 1);
});
