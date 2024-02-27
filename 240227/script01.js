// 나 & 컴 ==> 일치.불일치
// > 컴퓨터는 random이라는 함수 사용 ==> 숫자를 범위를 1~3로 지정

document.write("<h1>컴퓨터 & 나의 가위, 바위, 보 맞추기 게임!</h1>");
const game = prompt("가위, 바위, 보 중 선택하세요!", "ex. 가위 바위 보");

let gameNum = 0;

switch (game) {
  case "가위":
    gameNum = 1;
    break;
  case "바위":
    gameNum = 2;
    break;
  case "보":
    gameNum = 3;
    break;
  default:
    alert("잘못 작성됐습니다.");
    location.reload();
}
console.log(gameNum);

const com = Math.ceil(Math.random() * 3); //random은 무조건 1미만이기 때문에 가장큰 0.999를 곱해도 2.7xxx 따라서 무조건 소수점 뒷자리를 올림해야한다. - ceil 사용
document.write(`<img src="./images/math_img_${com}.jpg">`);
console.log(gameNum, com);
if (gameNum == com) {
  document.write("컴퓨터와 비겼습니다.");
} else {
  document.write("컴퓨터와 동일하지 않습니다.");
}
