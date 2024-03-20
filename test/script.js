const h1 = document.querySelector("h1");
const buttons = document.querySelectorAll(".btn span");
const imgAll = document.querySelectorAll(".imgBox");
console.log(imgAll);

// const imgChange = () => {
//   for (let i = 0; i < imgAll.length; i++) {
//     if (buttons.length !== i) {
//       imgAll[i].classList.add("active");

//       // h1.classList.add("active");
//     }
//   }
// };

const reset = (i) => {
  if (h1.innerText == String) {
    imgAll[i - 1].classList.remove("active");
    h1.classList.remove("active");
    h1.innerText = "";
    buttons[i - 1].classList.remove("active");
  }
};

const test = () => {
  reset();
  buttons[0].classList.remove("active");
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", () => {
      if (i < buttons.length) {
        imgAll[i].classList.add("active");
        h1.classList.add("active");
        h1.innerText = `Portfolio Slide#0${i + 1}`;
        buttons[i].classList.add("active");
      }
    });
  }
};
test();

// buttons.forEach((button) => {
//   button.addEventListener("click", imgChange);
// });

// const one = () => {
//   imgAll[0].classList.add("active");
//   h1.classList.add("active");
//   h1.innerText = "Portfolio Slide#01";
//   buttons[0].classList.add("active");
// };
// const two = () => {
//   imgAll[1].classList.add("active");
//   h1.classList.add("active");
//   h1.innerText = "Portfolio Slide#02";
//   buttons[1].classList.add("active");
// };
// const three = () => {
//   imgAll[2].classList.add("active");
//   h1.classList.add("active");
//   h1.innerText = "Portfolio Slide#03";
//   buttons[2].classList.add("active");
// };

// buttons[0].addEventListener("click", () => {
//   one();

// });
// buttons[1].addEventListener("click", () => {
//   two();
// });
// buttons[2].addEventListener("click", () => {
//   three();
// });
