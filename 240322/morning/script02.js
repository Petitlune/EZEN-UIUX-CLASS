const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

//글씨 쓰기
// ctx.font = "italic 60px serif";
// ctx.fillText("javascript", 50, 70);

// ctx.font = "bold 60px sans-serif";
// ctx.fillText("SHINEE", 50, 150);

//이미지 가져와서 그리기

let img = new Image();
img.onload = () => {
  ctx.drawImage(img, 0, 0, 300, 200);
};
img.src = "./bird.jpg";

//이미지를 잘라낸다는 개념 -> 어느 지점에서부터 이미지를 잘라낼 것인지, 좌표값 필요 -> 해당 좌표값으로부터 얼만큼 떨어진 지점인지에 대한 정의 필요 -> 해당 좌표값을 기준으로 너비와 높이 값은 어떻게 되는지 -> 잘라낸 이미지를 어떤  너비와 높이 값으로 출력할 것인지 ===> 총 4가지 단계 필요!
