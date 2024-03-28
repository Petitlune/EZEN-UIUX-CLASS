const staggerWrap = document.querySelector("ul");
//fragment함수는 그냥 겉에 감싸주는 역할만한다.
const fragment = document.createDocumentFragment();

const grid = [9, 3];
//구조분해 할당
const [col, row] = grid;

const allElem = col * row;
console.log(allElem); //총 27개

for (let i = 0; i < allElem; i++) {
  const li = document.createElement("li");
  fragment.appendChild(li);
  console.log(li);
}

staggerWrap.appendChild(fragment);

anime({
  targets: "ul li",
  easing: "linear",
  duration: 1000,
  scale: anime.stagger([0.5, 1], { grid: [9, 3], axis: "y" }),
});
