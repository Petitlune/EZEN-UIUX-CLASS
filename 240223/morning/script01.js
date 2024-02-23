//btn 버튼 과 nav 정의
//btn 버튼 클릭시 nav 나타남
//btn 위치는 nav 왼쪽에 붙음

const btn = document.querySelector("#btn");
const nav = document.querySelector("#nav");
console.log(nav);

btn.addEventListener("click", () => {
  if (!nav.classList.contains("active")) {
    nav.classList.add("active"), btn.classList.add("active");
  } else {
    nav.classList.remove("active"), btn.classList.remove("active");
  }
});

// btn.addEventListener("click", () => {
//   btn.classList.toggle("active");
//   nav.classList.toggle("active");
// });
