const slides = document.querySelector("ul");
const slide = slides.querySelectorAll("li");
const slideCount = slide.length;
const slidesWidth = 750;
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const pageNum = document.querySelector(".pageNum ");
const pagetotalNum = slide.length;
const currentNum = document.querySelector("#currentNum");
const lastNum = document.querySelector("#lastNum");

//초기값 셋팅
let currentIdx = 0;
const setStart = () => {
  const startleft = -slidesWidth * slideCount;
  slides.style.transform = `translate(${startleft}px)`;
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
  setStart();
};
makeClone();

//무한 슬라이드 셋팅

const moveSlide = (num) => {
  slides.style.left = `${-num * slidesWidth}px`;
  currentIdx = num;
  if (currentIdx === slideCount || currentIdx === -slideCount) {
    setTimeout(() => {
      slides.classList.remove("animated");
      slides.style.left = "0px";
    }, 300);
    currentNum.innerText = currentIdx + 1;
    currentIdx = 0;
  }
};

const autoSlide = () => {
  auto = setInterval(() => {
    slides.classList.add("animated");
    moveSlide(currentIdx + 1);
    currentNum.innerText = currentIdx + 1;
  }, 3000);
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

//이슈 : if조건문으로 currentIdx가 slideCount를 넘어가지 않도록 설정해줌으로써 빠르게 클릭했을 때 보이는 범위밖 숫자를 제거해주었다.
