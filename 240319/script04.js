const bar = document.querySelector(".bar");
const submarine = document.querySelector(".submarine");
const depth = document.querySelector(".depthWrap span");
const octo = document.querySelector(".octopus");

const precent = (scrollNum, documentHeight) => {
  return (scrollNum / documentHeight) * 100;
};

const deepSea = () => {
  const scrollNum = window.scrollY;
  depth.innerText = scrollNum;
  const documentHeight = document.body.scrollHeight - window.innerHeight;
  const per = precent(scrollNum, documentHeight) + "%";

  bar.style.width = per;

  submarine.style.left = per;
  octo.style.bottom = per;
};

window.addEventListener("scroll", deepSea);
