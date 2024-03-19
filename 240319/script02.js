const contentAll = document.querySelectorAll(".content-wrap img");
const [shadow, date, human, textImg] = contentAll;

let x = 0;
let targetX = 0;

const speed = 0.3;

window.addEventListener("mousemove", (e) => {
  x = e.pageX - window.innerWidth / 2;
});

const loop = () => {
  targetX += (x - targetX) * speed;

  shadow.style.transform = `translateX(${targetX / 20}px)`;
  date.style.transform = `translateX(${targetX / 20}px)`;
  human.style.transform = `translateX(${-targetX / 20}px)`;
  textImg.style.transform = `translateX(${-targetX / 20}px)`;
  window.requestAnimationFrame(loop);
};
loop();
