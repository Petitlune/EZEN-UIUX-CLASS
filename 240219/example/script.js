//바꾸고 싶은 배경색 지정
// 배열 안에 값은 각각 index값을 갖고 있음
const bodyTag = document.querySelector("#theBody");
console.log(bodyTag);
const btn = document.querySelector("button");
const colors = ["black", "skyblue", "purple", "crimson"];

let i = 0;
const changeColor = () => {
  i++;
  if (i >= colors.length) {
    i = 0;
  }
  bodyTag.style.backgroundColor = colors[i];
};

btn.addEventListener("click", changeColor);
