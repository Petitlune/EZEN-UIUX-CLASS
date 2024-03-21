const buttons = document.querySelectorAll("label");
const imgAll = document.querySelector(".items");
const h1All = document.querySelectorAll("h1");
console.log(buttons, imgAll, h1All);

//전처리 중요!

buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    imgAll.style.left = `-${index * 100}%`;

    buttons.forEach((button) => button.classList.remove("active"));
    button.classList.add("active");

    h1All.forEach((h1) => {
      h1.classList.remove("active");
    });
    h1All[index].classList.add("active");
  });
});
