const imgs = ["iu-1.jpg", "iu-2.jpg", "iu-3.jpg", "iu-4.jpg"];
const container = document.querySelector("#container");
const arrows = document.querySelectorAll(".arrow");
const sliderPagers = document.querySelector(".slide_pagers");
const pagers = document.querySelectorAll(".slide_pagers li");

console.log(pagers);
const img = document.createElement("img");
const src = document.createAttribute("src");

const imgSrc = `./imgs/iu-1.jpg`;
src.value = imgSrc;
img.setAttributeNode(src);
container.appendChild(img);

let i = 0;
const changeImg = (direction) => {
  if (direction === "next") {
    i++;
    if (i >= imgs.length) {
      i = 0;
    }
    reset();
    pagers[i].classList.add("active");
  } else if (direction === "prev") {
    i--;
    if (i < 0) {
      i = imgs.length - 1;
    }
    reset();
    pagers[i].classList.add("active");
  }
  src.value = `./imgs/${imgs[i]}`;
};

arrows.forEach((arrow) => {
  arrow.addEventListener("click", (e) => {
    console.log(e);
    const direction = e.target.id === "left" ? "prev" : "next";
    changeImg(direction);
  });
});

//자동으로 돌아가게 만들기
const autoSlide = () => {
  timer = setInterval(() => {
    changeImg("next");
  }, 3000);
};

const stopSlide = () => {
  clearInterval(timer);
};

autoSlide();

const reset = () => {
  pagers.forEach((pager, idx) => {
    pagers[idx].classList.remove("active");
  });
};

container.addEventListener("mouseenter", stopSlide);

sliderPagers.addEventListener("mouseenter", stopSlide);

container.addEventListener("mouseleave", autoSlide);

sliderPagers.addEventListener("mouseleave", autoSlide);

const pagerChange = (e) => {
  const target = e.target.dataset.index;
  reset();
  for (let i = 0; i < pagers.length; i++) {
    if (target == i) {
      pagers[i].classList.add("active");
      src.value = `./imgs/${imgs[i]}`;
    }
  }
};

pagers.forEach((pager) => {
  pager.addEventListener("click", pagerChange);
});
