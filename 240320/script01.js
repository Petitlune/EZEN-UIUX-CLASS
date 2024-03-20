const imageAll = document.querySelectorAll(".imageWrap .parallaxImage");
const totalNum = imageAll.length;
const subPageImage = document.querySelector(".subPage .parallaxImage");
console.log(subPageImage);
let scrollNum = 0;

window.addEventListener("scroll", () => {
  scrollNum = window.scrollY;
  imageAll.forEach((item, index) => {
    if (index < 4) {
      item.style.transform = `translateY(${
        -scrollNum / (1 * (totalNum - index))
      }px)`;
    }
  });
});

let x = 0;
let targetX = 0;
const speed = 0.1;

window.addEventListener("mousemove", (e) => {
  x = e.pageX - window.innerWidth / 2;
});

const loop = () => {
  targetX += (x - targetX) * speed;
  imageAll[4].style.transform = `translate(${-targetX / 20}px, ${
    -scrollNum / (5 * (totalNum - 5))
  }px)`;
  imageAll[5].style.transform = `translate(${targetX / 20}px, ${
    -scrollNum / (5 * (totalNum - 5))
  }px ) scale(1.1)`;

  window.requestAnimationFrame(loop);
};

loop();
