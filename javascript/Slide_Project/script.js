const slides = document.querySelector("ul");
const slide = slides.querySelectorAll("li");
const slideCount = slide.length;
const slidesWidth = 640;
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let currentIdx = 0;

// const updateWidth = () => {
//   const li = document.querySelector(".slides li");
//   const newslideCount = li.length;
//   const newWidth = `${slidesWidth * newslideCount}px`;
//   slides.style.width = newWidth;
// };

const setStart = () => {
  const startleft = -slidesWidth * slideCount;
  slides.style.transform = `translate(${startleft}px)`;
};

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
  setTimeout(() => {
    slides.classList.add("animated");
  }, 100);
  setStart();
  // updateWidth();
};

makeClone();

const moveSlide = (num) => {
  slides.style.left = `${-num * slidesWidth}px`;
  currentIdx = num;
  if (currentIdx === slideCount || currentIdx === -slideCount) {
    setTimeout(() => {
      slides.classList.remove("animated");
      slides.style.left = "0px";
      currentIdx = 0;
    }, 0);
    setTimeout(() => {
      slides.classList.add("animated");
    }, 100);
  }
};
nextBtn.addEventListener("click", () => {
  moveSlide(currentIdx + 1);
});
prevBtn.addEventListener("click", () => {
  moveSlide(currentIdx - 1);
});
