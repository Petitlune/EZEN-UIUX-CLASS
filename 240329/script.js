const staggerWrap = document.querySelector("ul");
//fragment함수는 시멘틱하지 않은(의미를 부여하지 않는) 그룹핑만 하는 역할을 한다 .
const fragment = document.createDocumentFragment();

const grid = [9, 5];
//구조분해 할당
const [col, row] = grid;
const allElem = row * col;

for (let i = 0; i < allElem; i++) {
  const li = document.createElement("li");
  fragment.appendChild(li);
}

staggerWrap.appendChild(fragment);

console.log(allElem);

// anime({
//   targets: "ul li",
//   easing: "linear",
//   duration: 1000,
//   scale: anime.stagger([0.5, 1], {
//     grid: [9, 5],
//     from: "center",
//     axis: "z",
//   }),
// });

const tl = anime.timeline({
  targets: "ul li",
  delay: anime.stagger(200, { grid: [9, 5], from: "center", axis: "z" }),
  loop: true,
  direction: "alternate",
});

tl.add({
  scale: [
    {
      value: 0.1,
      easing: "easeOutSine",
      duration: 500,
    },
    {
      value: 1,
      easing: "easeOutQuad",
      duration: 1200,
    },
  ],
}).add({
  translateX: anime.stagger(10, {
    grid: [9, 5],
    from: "center",
    axis: "x",
  }),
  translateY: anime.stagger(10, {
    grid: [9, 5],
    from: "center",
    axis: "y",
  }),
  rotate: anime.stagger([0, 180], { grid: [9, 5], from: "center", axis: "x" }),
});

//anime.js 보편 / 무난 /쉬움
//gsap.js 중급 / 기능 다양
//three.js 2D + 3D 그래팩 / 고급 / 기능 다양
