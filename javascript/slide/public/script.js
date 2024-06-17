const next = document.querySelector("#next");
const prev = document.querySelector("#prev");
const slide = document.querySelector(".slide");

next.addEventListener("click", () => {
  let items = document.querySelectorAll(".item");
  slide.appendChild(items[0]);
});

prev.addEventListener("click", () => {
  let items = document.querySelectorAll(".item");
  slide.prepend(items[items.length - 1]);
});
