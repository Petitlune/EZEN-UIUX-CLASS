const slideImg = document.querySelector(".wrap");
const imgs = ["slide-01.jpg", "slide-02.jpg", "slide-03.jpg"];

slideImg.style.backgroundImage = `url(./images/${imgs[0]})`;

const buttons = document.querySelectorAll(".btn");
let i = 0;

const Slide = () => {
  i = (i + 1) % imgs.length;
  buttons.forEach((btn, idx) => {
    if (i === idx) {
      btn.classList.add("active");
      slideImg.style.backgroundImage = `url(./images/${imgs[i]})`;
    } else {
      btn.classList.remove("active");
    }
  });
  buttons.forEach((btn, idx) => {
    btn.addEventListener("click", () => {
      buttons.forEach((btn) => {
        btn.classList.remove("active");
      });
      btn.classList.add("active");
      slideImg.style.backgroundImage = `url(./images/${imgs[idx]})`;
    });
  });
};

setInterval(Slide, 3000);

// const slideImg = document.querySelector(".wrap");
// const pagers = document.querySelectorAll(".pagenation .btn");

// const imgs = ["slide-01.jpg", "slide-02.jpg", "slide-03.jpg"];

// slideImg.style.backgroundImage = `url(./images/${imgs[0]})`;

// let index = 0;

// const rotation = () => {
//   index = (index + 1) % imgs.length;
//   pagers.forEach((pager, idx) => {
//     if (index === idx) {
//       pager.classList.add("active");
//       slideImg.style.backgroundImage = `url(./images/${imgs[index]})`;
//     } else {
//       pager.classList.remove("active");
//     }
//     pager.addEventListener("click", function () {
//       pagers.forEach((pager) => {
//         pager.classList.remove("active");
//       });
//       this.classList.add("active");
//       slideImg.style.backgroundImage = `url(./images/${imgs[idx]})`;
//     });
//   });
// };

// setInterval(rotation, 3000);
