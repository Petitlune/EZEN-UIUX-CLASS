// js 언어 이야기
// 객체지향 언어
// js언어 => 태생적으로 동기 처리 방식을 하도록 만들어졌다.

// 동기 => 순차적으로 무언가를 처리한다는 뜻
//콜백함수
//promise 객체
// async, await 키워드 사용

// const displayA = () => {
//   console.log("A");
// };
// const displayB = () => {
//   console.log("B");
// };
// const displayC = () => {
//   console.log("C");
// };

// displayA();
// displayB();
// displayC();

// 비동기가 된다는 것은 제 아무리 displayB라는 호출이 displayC 함수의 호출보다 먼저 발생했어도  displayC 함수의 결과값이 먼저 나오게 할 수만 있다면 우리는 자바스크립트언어를 비동기처리가 된 것처럼 만들어 낼 수 있는 것이다.

//<setTimeout 함수 사용해서 비동기 처리>
// const displayA = () => {
//   console.log("A");
// };
// const displayB = () => {
//   setTimeout(() => {
//     console.log("B");
//   }, 2000);
// }; //호출순서를 바꾸면서 비동기로 바꾸어버림 (setTimeout 사용)
// const displayC = () => {
//   console.log("C");
// };

// displayA();
// displayB();
// displayC();

//<콜백함수 이용해서 비동기처리>
// const displayA = () => {
//   console.log("A");
// };
// const displayB = (callBack) => {
//   setTimeout(() => {
//     console.log("B");
//     callBack();
//   }, 2000);
// };
// const displayC = () => {
//   console.log("C");
// };

// displayA();
// displayB(displayC);

// const display = (result) => {
//   console.log(`${result}준비완료`);
// };

// const order = (coffee, callBack) => {
//   console.log(`${coffee}주문접수`);
//   setTimeout(() => {
//     callBack(coffee);
//   }, 3000);
// };

// order("아메리카노", display);

//콜백지옥
const displayLetter = () => {
  console.log("A");
  setTimeout(() => {
    console.log("B");
    setTimeout(() => {
      console.loe("c");
    }, 1000);
  }, 1000);
};

//promise 객체 다음시간에
