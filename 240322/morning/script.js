// API : getCurrentLocation API, Localstorage API, Canvas API  이 세가지는 html5 이후에 나온 문법!

//스크립트로 canvas 사이즈 정의해주기! 만약 사이즈 정의 안되면 기본 값으로 설정되긴 하지만 그렇게 사용하는 경우는 없음. 만약 웹 브라우저 전체 화면을 canvas화 하고자 한다면 js를 활용해서 window객체의 inner 값을 활용한다.
const canvas = document.querySelector("canvas");

// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

//getContext(); 2차원의 도형을 만들어주는 함수
//canvas 태그 안에 그림을 그리려면 반드시 getContext("2d")함수를 이용해서 객체를 생성해주어야함.
//생성된 객체에 사용할 수 있는 다양한 속성 함수 존재.
const ctx = canvas.getContext("2d");

//<사각형 그리기>
//채우기 컬러를 정의
// ctx.fillStyle = "rgb(100,200,0)";
//사격형의 도형 생성시켜줌
// ctx.fillRect(10, 10, 200, 100);
//테두리 생성

// ctx.fillStyle = "rgb(200,100,0)";
// ctx.fillRect(50, 50, 100, 100);

// ctx.clearRect(70, 70, 50, 50);

// ctx.strokeStyle = "black";
// ctx.stroke();
//<선 그리기>
// ctx.beginPath(); //선언부
// ctx.moveTo(50, 50); //좌표점
// ctx.lineTo(200, 200);
// ctx.stroke(); //종결

//<삼각형 그리기>
// ctx.beginPath(); //선언부
// ctx.moveTo(50, 50); //좌표점
// ctx.lineTo(150, 100);
// ctx.lineTo(50, 150);
// ctx.closePath();
// ctx.stroke(); //종결

//<원 그리기>

// ctx.fillStyle = "red";
// ctx.beginPath();
// ctx.arc(150, 150, 50, 0, Math.PI * 1, true);
// ctx.arc(250, 150, 50, 0, Math.PI * 1, false);
// ctx.fill();

//<선으로만 그려지는 원>
// ctx.beginPath();
// ctx.arc(150, 150, 50, (Math.PI / 180) * 90, (Math.PI / 180) * 270, false);
// ctx.strokeStyle = "black";
// ctx.stroke();

// //<호 그리기>
// ctx.strokeStyle = " blue";
// ctx.beginPath();
// ctx.arc(200, 200, 50, 0, (Math.PI / 180) * 60, false);
// ctx.stroke();

//<타원 그리기>
// ctx.strokeStyle = "red";
// ctx.beginPath();
// ctx.ellipse(200, 70, 80, 50, 0, 0, (Math.PI / 180) * 360);
// ctx.stroke();

// ctx.strokeStyle = "blue";
// ctx.beginPath();
// ctx.ellipse(150, 200, 70, 50, (Math.PI / 180) * -30, 0, (Math.PI / 180) * 360);
// ctx.stroke();

//<arc이용해서 타원 그리기>
// ctx.strokeStyle = "blue";
// ctx.scale(1, 0.7);
// ctx.beginPath();
// ctx.arc(200, 150, 30, 0, (Math.PI / 180) * 360, false);
// ctx.stroke();

//<곡선 만들기>
//<2차 베지에 곡선 : 조절점이 하나일 때>
// ctx.beginPath();
// ctx.moveTo(50, 200);
// ctx.quadraticCurveTo(450, 50, 350, 200);
// ctx.stroke();

//<곡선>
// ctx.beginPath();
// ctx.moveTo(50, 100);
// ctx.quadraticCurveTo(100, 50, 150, 100);
// ctx.quadraticCurveTo(200, 150, 250, 100);
// ctx.quadraticCurveTo(300, 50, 350, 100);
// ctx.stroke();

//<조절점 여러개일때 곡선>
// ctx.beginPath();
// ctx.moveTo(50, 100);
// ctx.bezierCurveTo(90, 250, 310, 10, 350, 100);
// ctx.stroke();

//<변수 안에 담기>
let triangle = new Path2D();
triangle.moveTo(100, 100);
triangle.lineTo(300, 100);
triangle.lineTo(200, 260);
triangle.closePath();

ctx.stroke(triangle);

let circle = new Path2D();
circle.arc(200, 150, 50, 0, (Math.PI / 180) * 360);
ctx.strokeStyle = "yellow";
ctx.fillStyle = "royalblue";
ctx.stroke(triangle);
ctx.fill(circle);

// ctx.fillStyle = "yellow";
// ctx.strokeStyle = "red";
// ctx.beginPath();
// ctx.arc(150, 150, 80, 0, Math.PI * 2, true);
// ctx.fill();
// ctx.stroke();

// // <Radian 개념>
//JS 세계관에서는 1도 = 45도  하지만 canvas에서는 Radian이라는 각도를 사용(degX)
//1래디언 = PI(3.14) / 180 (그냥 이렇게 하자고 약속한 것임. 이유 없음)
//1래디언 = PI / 180  = (PI / 180) * 180  => (PI * 1) == 우리가 이야기하느 180도
//2래디언 = (PI / 180) * 360  => (PI * 1) == 우리가 이야기하느 180도

//js에서 Math.PI *1 = 180도

// const radians = (Math.PI / 180) * 180;

//<실습 예제 그림판 만들기 >
