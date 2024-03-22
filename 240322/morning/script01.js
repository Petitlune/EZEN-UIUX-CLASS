const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

//face
ctx.fillStyle = "green";
ctx.scale(1, 0.7);
ctx.beginPath();
ctx.arc(150, 150, 80, 0, (Math.PI / 180) * 360, false);
ctx.fill();

//<left>

//eye
ctx.beginPath();
ctx.fillStyle = "white";
ctx.strokeStyle = "green";
ctx.arc(120, 80, 20, 0, (Math.PI / 180) * 360, false);
ctx.moveTo(200, 80); // 중심점 잠시 이동시킴
ctx.arc(180, 80, 20, 0, (Math.PI / 180) * 360, false);
ctx.fill();
ctx.stroke();

//eye circle
ctx.beginPath();
ctx.arc(120, 90, 10, 0, (Math.PI / 180) * 360, false);
ctx.moveTo(200, 80); // 중심점 잠시 이동시킴
ctx.arc(180, 90, 10, 0, (Math.PI / 180) * 360, false);
ctx.fillStyle = "black";
ctx.fill();

//mouse
ctx.beginPath();
ctx.fillStyle = "white";
ctx.arc(150, 160, 50, 0, (Math.PI / 180) * 180, false);
ctx.fill();

ctx.beginPath();
ctx.scale(1, 0.6);
ctx.fillStyle = "pink";
ctx.arc(150, 320, 30, 0, (Math.PI / 180) * 360, true);
ctx.fill();
//<right>
//eye
// ctx.beginPath();
// ctx.fillStyle = "white";
// ctx.strokeStyle = "green";
// ctx.arc(170, 80, 20, 0, (Math.PI / 180) * 360, false);
// ctx.fill();
// ctx.stroke();

// //eye circle
// ctx.beginPath();
// ctx.arc(170, 90, 10, 0, (Math.PI / 180) * 360, false);
// ctx.fillStyle = "black";
// ctx.fill();
