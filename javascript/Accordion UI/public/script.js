const clickMenu = document.querySelectorAll(".visible");
const hiddenMenu = document.querySelectorAll(".hidden");
const minusBtn = document.querySelectorAll(".btn span:last-child");
const question = document.querySelectorAll(".question");

clickMenu.forEach((item, i) => {
  item.addEventListener("click", () => {
    hiddenMenu[i].classList.toggle("active");
    minusBtn[i].classList.toggle("active");
    question[i].classList.toggle("active");
    clickMenu.forEach((item2, i) => {
      if (item2 !== item) {
        hiddenMenu[i].classList.remove("active");
        minusBtn[i].classList.remove("active");
        question[i].classList.remove("active");
      }
    });
  });
});

//중첩 for문을 이용해 현재 클릭된 버튼의 인덱스와 일치하지 않는 인덱스를 가진 모든 버튼에서 "active" 클래스를 제거해주었다.
