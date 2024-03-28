new fullpage("#fullpage", {
  //options here
  autoScrolling: true,
  scrollHorizontally: true,
  //navigation 생성
  navigation: true,
  //상단 nav 클릭시 페이지로 이동하기 위한 배열값
  anchors: ["Num0", "Num1", "Num2", "Num3", "Num4"],
  afterLoad: (old_elem, new_elem) => {
    if (new_elem.index === 2) {
      sec2();
    } else {
      sec2_reset();
    }
  },
});

const navBtn = document.querySelector("#nav_icon");
const nav = document.querySelector(".nav");
// const sec2 = document.querySelector("#sec2");
const sec2Tit = document.querySelector("#sec2 .title");
const sec2Silder = document.querySelector("#sec2 .slider_wrap");
console.log(sec2Silder);

navBtn.addEventListener("click", () => {
  navBtn.classList.toggle("active");
  nav.classList.toggle("active");
});

// sec2.addEventListener("onload", () => {
//   sec2Silder.style.transform = translateX("-100px");
//   sec2Silder.style.opacity = 1;
// });

const sec2 = () => {
  sec2Silder.style.cssText = `opacity: 1; transform: translateX(200px);`;
};

const sec2_reset = () => {
  sec2Silder.style.cssText = `opacity: 0; transform: translateX(400px);`;
};
