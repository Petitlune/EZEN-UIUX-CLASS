const h1 = document.querySelector("h1");
const buttons = document.querySelectorAll(".btn span");
const imgAll = document.querySelectorAll(".imgBox");
console.log(imgAll);

const resetOtherButtons = (clickedIndex) => {
  for (let i = 0; i < buttons.length; i++) {
    if (i !== clickedIndex) {
      buttons[i].classList.remove("active");
    }
  }
};

const reset = () => {
  if (h1.innerText != "") {
    imgAll[i - 1].classList.remove("active");
    h1.classList.remove("active");
    h1.innerText = "";
  }
};

const test = () => {
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", () => {
      resetOtherButtons();
      reset();
      imgAll[i].classList.add("active");
      h1.classList.add("active");
      h1.innerText = `Portfolio Slide#0${i + 1}`;
      buttons[i].classList.add("active");
    });
  }
};

test();

// const test = () => {
//   for (let i = 0; i < buttons.length; i++) {
//     buttons[i].addEventListener("click", () => {
//       imgAll[i].classList.add("active");
//       h1.classList.add("active");
//       h1.innerText = `Portfolio Slide #0${i + 1}`;
//       buttons[i].classList.add("active");
//     });
//   }
// };

// test();
