//mouse의 움직임에 따른 좌표값 변경 필요.
//window 객체 안에 포함되어 있는 이벤트

//clientX = 74. pageX =74 , screenX =-823
//pageX는 스크롤 되었을 때까지 고려해서 값을 보여줌. (가장 많이 사용될 것임)

//현재 마우스가 위치해있는 좌표값에서 이동 후 마우스가 위치해 있는 좌표값

const cursorItem = document.querySelector(".cursorItem");
const circle = cursorItem.querySelector(".circle");
const buttonAll = document.querySelectorAll("a");
//전역 스코프에 선언을 해주어야 이벤트 함수 안에서 재할당 된 변수를 밖으로 꺼내서도 사용 가능하다. - 스코프의 개념
let x = 0,
  y = 0;
//커서가 부드럽게 움직이게 해주기 위한 설정
//현재의 좌표를 의미
let targetX = 0,
  targetY = 0;
//속도에 대한 비율
let speed = 0.2;

buttonAll.forEach((button) => {
  button.addEventListener("mouseenter", () => {
    circle.style.transform = "scale(0.3)";
  });
  button.addEventListener("mouseout", () => {
    circle.style.transform = "scale(1)";
  });
});

window.addEventListener("mousemove", (e) => {
  x = e.pageX;
  y = e.pageY;
});

//좀 더 부드럽게 만들어주기 위함
const loop = () => {
  targetX += (x - targetX) * speed;
  targetY += (y - targetY) * speed;

  cursorItem.style.transform = `translate(${targetX}px, ${targetY}px)`;
  //재귀함수 requestAnimationFrame사용. => 자체적으로 계속 실행시켜라 라는 명령을 내려줌
  window.requestAnimationFrame(loop);
};

loop();
