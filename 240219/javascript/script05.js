//window 운영체제 내장함수

//setInterval() : 일정 시간마다 반복해서 무언가를 처리하는 함수

// const greeting = () => {
//   console.log("안녕하세요!");
// };
// greeting();
//setInterval에서는 두가지의 인수를 줄 수 있다. 1. 실행시키고자 하는 함수 / 2. 시간
// 1000밀리초 = 1초
// setInterval(greeting, 2000);
// 콜백함수 이기 때문에 아래와 같게도 쓸 수 잇음
// setInterval(() => {
//   console.log("안녕하세요!");
// }, 2000);

// clearInterval(): 특정 조건에 따라서 반복실행 함수를 멈추게 하는 함수  - setInterval과 거의 세트로 사용됨
// 단락회로평가!!

//전역 스코프 - 재할당 가능함.
// let counter = 0;

//timer는 재귀함수 : 제일 바깥함수가 다시 안쪽으로 들어갔다.

// let timer = setInterval(() => {
//   console.log("안녕하세요!");
//   counter++;
//   if (counter === 5) {
//     clearInterval(timer);
//   }
// }, 2000);

//setTimeout() :특정 시간이 경과한 이후에 작동하게 만드는 함수.
// heap / callstack / Que --- 나중에 배움

setTimeout(() => {
  console.log("안녕하세요!");
}, 10000);
