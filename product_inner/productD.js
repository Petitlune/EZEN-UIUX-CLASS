const DbackBtn = document.querySelector(".proD-backBtn");
const DnextBtn = document.querySelector(".proD-nextBtn");

const DslideImg = document.querySelector(".proDSlideBox");

console.log(DnextBtn);

const per = 10;

let i = 0;
DnextBtn.addEventListener("click", () => {
  if (i <= 8) {
    i++;
    DslideImg.style.transform = `translateX(-${per * i}%)`;
  }
  // else {
  //   i--;
  //   DslideImg.style.transform = `translateX(-${per * i}%)`;
  // }
});

DbackBtn.addEventListener("click", () => {
  if (i >= 0) {
    i--;
    DslideImg.style.transform = `translateX(-${per * i}%)`;
  } else {
    i++;
    DslideImg.style.transform = `translateX(-${per * i}%)`;
  }
});
