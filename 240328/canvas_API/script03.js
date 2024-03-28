const canvas = document.querySelector("#canvas");
const toolbar = document.querySelector("#toolbar");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight - toolbar.offsetHeight;

const canvasOffsetY = canvas.offsetTop;
console.log(canvasOffsetY); // 70만큼 떨어진 지점이라는 사실을 알려주어야 마우스와 선 사이의 갭을 없애줄 수 있다.

const ctx = canvas.getContext("2d");

let startX;
let startY;
let lineWidth = 2;

//클릭한 후 움직일 때가 이벤트가 작동하도록 단락회로평가 주어야함.
let isDrawing = false;

canvas.addEventListener("mousedown", (e) => {
  //pageX Y로 써도 똑같음
  isDrawing = true;
  startX = e.clientX;
  startY = e.clientY;
});

canvas.addEventListener("mousemove", (e) => {
  if (!isDrawing) {
    return;
  }
  ctx.lineWidth = lineWidth;
  ctx.lineCap = "round";
  ctx.lineTo(e.clientX, e.clientY - canvasOffsetY);
  ctx.stroke();
});
canvas.addEventListener("mouseup", () => {
  isDrawing = false;
  ctx.beginPath();
});

//지우기 이벤트
toolbar.addEventListener("click", (e) => {
  if (e.target.id === "reset") {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
});
//색상 변경 이벤트
toolbar.addEventListener("change", (e) => {
  if (e.target.id === "stroke") {
    ctx.strokeStyle = e.target.value;
  }
  if (e.target.id === "lWidth") {
    lineWidth = e.target.value;
  }
});
