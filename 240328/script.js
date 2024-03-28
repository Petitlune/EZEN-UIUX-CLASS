const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

// let img = new Image();

// img.onload = () => {
//   //drawImage함수: canvas 영역 안에 이미지를 넣고자 할 때 사용하는 함수.
//   // => 총 세개의 매개변수 할당 (이미지 경로, x축 떨어진 지점, y축 떨어진 지점 , 가로사이즈, 세로사이즈)
//   //가로와 세로 사이즈 따로 지정 안할시 캔버스에 커버되는 형태로 이미지가 들어감.
//   // ctx.drawImage(img, 0, 0, 200, 200);
//   //이미지 일부분만 나타나게 하고 싶을때
//   // ctx.drawImage(img, 100, 50, 280, 250, 160, 100, 140, 175);
//   ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
// };

// img.src = "bird.jpg";

// ctx.beginPath();

// ctx.arc(200, 200, 150, 0, (Math.PI / 180) * 360, false);
// ctx.clip();

//별 만들기

ctx.beginPath();
ctx.moveTo(80, 100);
ctx.lineTo(260, 100);
ctx.lineTo(120, 250);
ctx.lineTo(170, 30);
ctx.lineTo(220, 250);

ctx.closePath();

ctx.stroke();
