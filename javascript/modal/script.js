const modalBtn = document.querySelector("button");
const closeBtn = document.querySelector(".closeBtn");
const modalContent = document.querySelector(".modal-content");

modalBtn.addEventListener("click", () => {
  modalContent.classList.add("active");
});
closeBtn.addEventListener("click", () => {
  modalContent.classList.remove("active");
});
