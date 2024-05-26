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

const clickSlide = () => {
  const pickSlide = document.querySelector(".pick-slide");
  let pickSlideWidth = pickSlide.clientWidth;
  const gap = 16;
  const pickSlideItems = document.querySelectorAll(".pick-book").length;
  const progressbar = document.querySelector(".bar-inner");
  const pickNextBtn = document.querySelector(".right");
  const pickPrevBtn = document.querySelector(".left");

  let i = 0;

  const updateSlide = () => {
    pickSlideWidth = pickSlide.clientWidth + gap;
    const slideDistance = pickSlideWidth;
    pickSlide.style.left = `-${slideDistance * i}px`;
    progressbar.style.width = `${(100 / pickSlideItems) * (i + 1)}%`;
  };

  const initSlide = () => {
    pickSlideWidth = pickSlide.clientWidth;
    const slideDistance = pickSlideWidth;
    pickSlide.style.left = `-${slideDistance * i}px`;
    progressbar.style.width = `${(100 / pickSlideItems) * (i + 1)}%`;
  };

  window.addEventListener("resize", updateSlide);

  pickNextBtn.addEventListener("click", () => {
    i = (i + 1) % pickSlideItems;
    if (window.innerWidth === 1920) {
      initSlide();
    } else {
      updateSlide();
    }
  });

  pickPrevBtn.addEventListener("click", () => {
    i = (i - 1 + pickSlideItems) % pickSlideItems;
    if (window.innerWidth === 1920) {
      initSlide();
    } else {
      updateSlide();
    }
  });
};

clickSlide();

const menuBtn = document.querySelector(".menu-button");
const navHiddenMenu = document.querySelector(".toggle-menu");

menuBtn.addEventListener("click", () => {
  navHiddenMenu.classList.toggle("active");
  menuBtn.classList.toggle("active");
});

const bestSlide = () => {
  const selectGrade = document.querySelectorAll("#grade span");
  const gradeInner = document.querySelectorAll(".slide-wrap .item");
  const bestItemWidth = document.querySelectorAll(".slide-item")[0];
  const bestItemWrap = document.querySelectorAll(".items-wrap");
  const bestBtnPrev = document.querySelector(".bestseller-btn .prev");
  const bestBtnNext = document.querySelector(".bestseller-btn .next");

  selectGrade.forEach((grade, i) => {
    grade.addEventListener("click", () => {
      gradeInner.forEach((it, i) => {
        it.classList.remove("active");
        selectGrade[i].classList.remove("active");
      });

      grade.classList.add("active");
      gradeInner[i].classList.add("active");
    });
  });
};

bestSlide();
