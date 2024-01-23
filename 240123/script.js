// 변수 선언
const trigger = document.querySelector(".trigger");
const gnb = document.querySelector("#gnb");
const header = document.querySelector("header");
const gototop = document.querySelector(".gototop");
// console.log(trigger)-검사를 통해 적용되었는지 알고 싶을때;
// console.log(gnb);
// console.log(header);
console.log(gototop);

// 스크롤시 헤더를 검정으로 바꿔주기
window.addEventListener("scroll", () => {
  if (window.scrollY > 455) {
    header.classList.add("active");
    gototop.classList.add("active");
  }
  // 그렇지 않다면
  else {
    header.classList.remove("active");
    gototop.classList.remove("active");
  }

  // console.log(window.scrollY);
});

// 모바일 부분 toggle 버튼 활성화 시켜주기
trigger.addEventListener("click", () => {
  gnb.classList.toggle("active");
  trigger.classList.toggle("active");
});

gototop.addEventListener("click", (e) => {
  // e(클릭시 바로바로 이동하게 해주는)의 기능을 무력화 시키는 코드
  e.preventDefault();
  window.scrollTo({ top: header, behavior: "smooth" });
});
