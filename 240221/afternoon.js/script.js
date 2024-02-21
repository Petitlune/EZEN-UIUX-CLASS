//클릭과 close에 대한 정의
//container에 가상 클래스값을 주어 누르면 작동하게 만들어줌.

const click = document.querySelector(".open");
const close = document.querySelector(".close");
const container = document.querySelector(".container");
console.log(container);

// click.onclick = () => {
//   if(!click.classList.contains("active")){
//     click.classList.add("active")
//   }
//   else {
//     click.classList.remove("active")
//   }
// }

// click.onclick = () => {
//   if (container.classList.contains("container")) {
//     container.style.display = "block;";
//   }
// };

const openFnc = () => {
  click.style.display = "none";
  container.style.display = "flex";
};
const closeFnc = () => {
  container.style.display = "none";
  click.style.display = "block";
};

click.onclick = openFnc;
close.onclick = closeFnc;
