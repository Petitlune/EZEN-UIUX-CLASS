const modalBtn = document.querySelector("#modal-btn");
const modal = document.querySelector(".modal");
const closeBtn = document.querySelector(".btn-close");

modalBtn.addEventListener("click", () => {
  modal.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  modal.classList.remove("active");
});

// modal.addEventListener("click", () => {
//   modal.classList.remove("active");
// });
