// function sum(a, b) {
//   const sum = a + b;
//   console.log(`함수 실행결과값 : ${sum}`);
// }
// sum(1, 2);

// 위에 함수의 구현과 실행을 한번에 써줌 = 즉시 실행 함수

// (function sum(a, b) {
//   const sum = a + b;
//   console.log(`함수 실행결과값 : ${sum}`);
// })(1, 2);

//화살표 함수
//Hoisting 기법 : 무언가를 끌어올리다. class 함수는 Hoisting이 가능  but 화살표와 익명 함수는 불가능
//무조건 선언 후 호출 하는 것을 정석으로 해라.
// const example = () => {
//   console.log("hello");
// };

// example();

//익명함수
// const example01 = function () {
//   console.log("hello");
// };

//화살표 함수 탄생 이유
// 1) 반복적으로 사용되는 function & 함수명을 생략
// 2) JS 근본없는 구현 & 호출부의 순서를 명확하게 정의!!
// 3) 함수의 실행문에서 굳이 중괄호와 return문 사용하지 않아도 구현할 수 있도록 해주기위한 목적
//화살표 함수에서는 매개변수가 존재하지 않는 경우에는 실행문을 보호하는 중괄호 & 값을 반환시켜주는 return문을 생략해도 문제없이 작동가능! : 화살표 함수의 특징
// let hi = () => `안녕하세요!`;
// console.log(hi());

// let sum = function (a, b) {
//   return a + b;
// };
// let sum = (a, b) => a + b;
// console.log(sum);

// 변수 선언시 let const var 사용하지 않으면 무조건 전역변수화 된다.
// function greeting() {
//   hi = "hello";
// }
// greeting();
// 전역변수화 됐기 때문에 전역변수화 된 hi로 값을 찍어야함.
// console.log(hi);

// const hi = "hello";
// function greeting() {}
// console.log(hi);
