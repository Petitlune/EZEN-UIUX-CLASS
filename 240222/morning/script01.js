const btn = document.querySelector("button");

// btn.onclick = () => {
//   document.body.style.backgroundColor = "crimson";
// }; // 직접 이벤트 핸들러 사용

btn.addEventListener("click", () => {
  document.body.style.backgroundColor = "teal";
});
//addEventListener는 콜백함수를 받을 수 있어서 많이 쓰임
