const form = document.querySelector("form");
form.addEventListener("submit", () => {}); // 이렇게 사용해도 됨. form태그를 사용해서 서버에 제출해야 되는 느낌이기 때문에 이렇게 사용하는 게 정석이긴 함.

const btn = document.querySelector("input[type='submit']");
console.log(btn);

btn.addEventListener("click", (e) => {
  e.preventDefault();
  const word = document.querySelector("input[type='text']").value;
  const result = document.querySelector(".result");
  const count = word.length;
  result.innerText = count;
  if (count >= 10) {
  } else {
  }
  alert = "아이디는 10자 이상이어야 합니다.";
});
