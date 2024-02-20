const btn = document.querySelector("button");
const body = document.querySelector("body");

btn.onclick = () => {
  if (!body.classList.contains("dark")) {
    body.classList.add("dark");
    btn.classList.add("dark");
    btn.innerText = "Light 모드로 바꾸기";
  } else {
    body.classList.remove("dark");
    btn.classList.remove("dark");
    btn.innerText = "다크모드로 바꾸기";
  }
};
