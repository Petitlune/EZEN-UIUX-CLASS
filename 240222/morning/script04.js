//버튼 찾아오기
const arrows = document.querySelectorAll(".arrow");
const container = document.querySelector("#container");
let i = 0; //무조건 웹브라우저 새로고침하면 인덱스가 0인 것부터 시작
const pics = [
  "pic-1.jpg",
  "pic-2.jpg",
  "pic-3.jpg",
  "pic-4.jpg",
  "pic-5.jpg",
  "pic-6.jpg",
];
//숫자를 반복문을 사용해서 증가시킨다는 insight
//for Each문 사용

container.style.backgroundImage = `url(./images/${pics[0]})`;

// arrow는 참조변수 : 하나는 왼쪽 하나는 오르쪽
arrows.forEach((arrow) => {
  //생성된 이벤트 객체를 e라고 지정해줌
  arrow.addEventListener("click", (e) => {
    // console.log(e.target.id);  left 와 right 확인해줌
    if (e.target.id === "left") {
      //단락회로 평가 필요
      i--;
      if (i < 0) {
        i = pics.length - 1;
      }
    } else if (e.target.id === "right") {
      i++;
      if (i >= pics.length) {
        i = 0;
      }
    } //이벤트 종결
    container.style.backgroundImage = `url(./images/${pics[i]})`;
  });
});
