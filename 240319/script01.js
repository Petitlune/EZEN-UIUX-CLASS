const h1 = document.querySelector("h1");
const box = document.querySelector(".box");

// mouse 이동시 최종 좌표값 pageX pageY
let x = 0,
  y = 0;
// mouse 이동시 속도 갭 주기 위해서 좌표값 두번 정의
let targetX = 0,
  targetY = 0;
// mouse 이동 전, 후 아이콘 속도 비율
let speed = 0.03;

window.addEventListener("mousemove", (e) => {
  x = e.pageX;
  y = e.pageY;

  h1.innerText = `x : ${x}, y: ${y}`;
});

const loop = () => {
  //공식임.
  targetX += (x - targetX) * speed;
  targetY += (y - targetY) * speed;

  box.style.top = targetY + "px";
  box.style.left = targetX + "px";
  //재귀함수 이용해서 함수를 반복해서 실행시킴.
  window.requestAnimationFrame(loop);
};

loop();
