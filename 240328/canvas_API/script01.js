const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

//도형만들고 색상을 부여, 투명도 정의

//전체 투명도 정의
// ctx.globalAlpha = 0.3;

// ctx.fillStyle = "rgb(255, 0, 0, 0.8)"; //개별적으로 투명도 주기 rgba라고 안써줘도 알아서 인식함.
// ctx.fillRect(50, 50, 100, 50);
// ctx.fillStyle = "rgb(0, 0, 255)";
// ctx.fillRect(50, 100, 100, 50);
// ctx.fillStyle = "rgb(0, 255, 0, 0.1)";
// ctx.fillRect(50, 150, 100, 50);
// ctx.fillStyle = "rgb(0, 0, 0)";
// ctx.fillRect(50, 200, 100, 50);

//선형 그라디언트 & 원형 그라디언트

// let linGrad = ctx.createLinearGradient(x, y, x, y);
// let linGrad = ctx.createLinearGradient(0, 0, 0, 200);
// linGrad.addColorStop(0, "#000");
// linGrad.addColorStop(0.8, "#fff");
// linGrad.addColorStop(1, "#eee");

// ctx.fillStyle = linGrad;
// ctx.fillRect(0, 0, 500, 300);

//두개의 원이 필요/ 먼저 입력되는 수치 = 내부 원, 나중에 입력되는 수치 = 외부 원
let radGrad = ctx.createRadialGradient(55, 60, 10, 80, 90, 100);

radGrad.addColorStop(0, "white");
radGrad.addColorStop(0.3, "yellow");
radGrad.addColorStop(1, "green");

ctx.fillStyle = radGrad;
ctx.arc(100, 100, 80, 0, Math.PI * 2, false);
ctx.fill();
