//index에 defer 입력 / button 태그 입력 후 실행
// const btn = document.querySelector("button");
// const display = () => {
//   alert("오늘도 화이팅입니다. 자세 똑바로 하세요~");
// };

//addEventListener는 매개변수가 두개 무조건 들어와야함. 함수 안에 함수 => 콜백함수
// btn.addEventListener("click", display);

// 매개변수(식별자) 대신 화살표 함수를 바로 써주어도 상관 없음.
// btn.addEventListener("click", () => {
//   alert("오늘도 화이팅입니다. 자세 똑바로 하세요~");
// });

//콜백함수 실습 => 슬라이드 만들때 자주 나옴.

// const showData = (name, age) => {
//   alert(`안녕하세요. ${name}님 나이가 ${age}살 이군요!`);
// };
// const getData = (callback) => {
//   const userName = prompt("이름을 입력해주세요.");
//   const userAge = prompt("나이를 입력해주세요.");
//   callback(userName, userAge);
// };
// getData(showData);

// JAVA / python / C 등등 기타 프로그래밍 언어 함수
// JS 함수 => 1급 시민 => first-class citizen
// 모든 프로그래밍 언어에서 1급 시민이 되려면 다음과 같은 조건에 부합해야한다.
// 1) 함수를 변수에 값으로 할당할 수 있어야한다.
// 2) 함수가 또다른 함수의 매개변수 혹은 인자값으로 사용될 수 있어야한다. (=> 콜백함수)

// 3) 함수가 또다른 함수의 return문 안에 반환값으로 들어올 수 있어야한다.
// const init = () => {
//   return function (a, b) {
//     return a - b > 0 ? a - b : b - a;
//   };
// };
// console.log(`init(30, 20) : ${init(30, 20)}`);

// const addNum = (a, b) => {
//   return a + b;
// };
// console.log(addNum(1, 2, 3, 5));

//...(=전개 연산자)은 인자값이 몇개든 모두 다 받아오라는 뜻
// const addNum01 = (...numbers) => {
//   // 연산에 아무런 영향을 주지 않는 '숫자' 0을 넣어줌
//   let sum = 0;
//   //for of문
//   for (let number01 of numbers) {
//     sum += number01;
//   }
//   return sum;
// };
// console.log(addNum01(1, 3, 5, 7));
// console.log(addNum01(1, 3));

// 나머지 매개변수

const displayFavorites = (first, second, ...favor) => {
  const str = `가장 좋아하는 과일은 ${first}입니다.`;
  const str01 = `두번째로 좋아하는 과일은 ${second}입니다`;
  return str01;
};
console.log(displayFavorites("사과", "토마토", "포도"));
