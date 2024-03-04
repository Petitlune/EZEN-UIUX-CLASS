// js 문법 3대장 1) 함수 2) 객체 및 배열 3)API
const season = [];
season[0] = "spring";
season[1] = "summer";

console.log(season);

const fruits = new Array("사과", "복숭아", "포도");
fruits[4] = "배";

console.log(fruits[3]); //undefined 아직 할당되지 않은 값!! = 값이 있는 것임.
fruits[0] = "오렌지";
console.log(fruits);
console.log(fruits.length);
//배열 전체 아이템 개수 : length
//배열 안에 가장 마지막 아이템의 인덱스 값 => arr.lenght - 1

//배열을 사용하는 이유 ==> 반복문!!
//일반 for 문 / for of문 / forEach문

const colors = ["red", "green", "blue", "white", "black"];

// for (let i = 0; i < colors.length; i++) {
//   console.log(colors[i]);
// }
colors.forEach((color, index) => {
  console.log(`colors[${index}] : ${color}`);
});
colors.forEach((color, index, array) => {});
