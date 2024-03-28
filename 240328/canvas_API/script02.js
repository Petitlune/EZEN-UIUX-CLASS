//!!!!!js는 변수가 가장 중요!!!!!!

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

// let img = new Image();
// img.onload = () => {
//   let pattern = ctx.createPattern(img, "repeat");
//   ctx.fillStyle = pattern;
//   ctx.fillRect(0, 0, 400, 400);
// };

// img.src = "./img/pattern.png";

// let radGrad = ctx.createRadialGradient(55, 60, 10, 80, 90, 100);
// radGrad.addColorStop(0, "white");
// radGrad.addColorStop(0.4, "yellowgreen");
// radGrad.addColorStop(1, "green");

// //shadow - 그림자 효과
// ctx.shadowColor = "#ccc";
// ctx.shadowOffsetX = 5;
// ctx.shadowOffsetY = 20;
// ctx.shadowBlur = 10;

// ctx.fillStyle = radGrad;
// ctx.arc(100, 100, 80, 0, Math.PI * 2, false);
// ctx.fill();

//canvas API에서 선을 그릴 때 선의 끝자락 모양 스타일 정의
// 1) butt : 기본값 = 선의 끝 모양을 단면으로 처리
// 2) round : 선의 끝모양을 둥그렇게 처리
// 3) square : 선의 끝에 선 높이의 1/2 정도만큼 추가로 더함

// const lineCap = ["butt", "round", "square"];

// ctx.strokeStyle = "#222";
// for (let i = 0; i < lineCap.length; i++) {
//   ctx.lineWidth = 15;
//   ctx.lineCap = lineCap[i];
//   ctx.beginPath();
//   ctx.moveTo(50, 50 + i * 30);
//   ctx.lineTo(350, 50 + i * 30);
//   ctx.stroke();
// }

// 선의 교차지점 스타일 정의
// 1) bevel : 선이 교차하는 지점을 단면으로
// 2) miter : 선이 교차하는 지점에서 각지게
// 3) round : 선이 교차하는 지점에서 둥글게

const lineJoin = ["bevel", "miter", "round"];

ctx.strokeStyle = "orange";
for (let i = 0; i < lineJoin.length; i++) {
  ctx.lineWidth = 10;
  ctx.lineJoin = lineJoin[i];
  ctx.beginPath();
  ctx.moveTo(50, 150 * i + 30);
  ctx.lineTo(130, 80 * i + 50);
  ctx.lineTo(200, 80 * i + 50);
  ctx.stroke();
}
