//시간대 별로 나타나는 이미지 다르게 보여주고싶다.
const today = new Date(); //시간을 가져오고싶을때 -자바 스크립트 안에 생성되어 있는 함수 이용
const hrs = today.getHours();
const container = document.querySelector("#container");
console.log(newImg);

const newImg = document.createElement("img");
newImg.src = hrs < 12 ? "./images/morning.jpg" : "./images/afternoon.jpg";
container.appendChild(newImg);
