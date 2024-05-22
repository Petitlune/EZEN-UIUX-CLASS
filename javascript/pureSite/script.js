const optionMenu = document.querySelector(".option-menu");
const optionList = document.querySelector(".option-menu ul");
const optionLists = document.querySelectorAll(".option-menu li");

optionMenu.addEventListener("click", () => {
  optionList.classList.toggle("active");
  optionLists.forEach((it) => {
    it.classList.toggle("active");
  });
});
