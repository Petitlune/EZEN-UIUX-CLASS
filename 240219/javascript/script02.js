//return문 : 함수가 연산작업을 한 이후에 연산에 대한 작업물을 밖으로 꺼내고 싶을 때 return문 사용

// const num = Number(prompt("숫자를 몇까지 더할까요?"));

// function clacSum(n) {
//   let sum = 0;
//   for (let i = 1; i <= n; i++) {
//     sum += i;
//   }
//   return sum;
// }
// clacSum(num);
// document.write(`1부터 ${num}까지 더하면 ${clacSum(num)}입니다`);

// const userNumber01 = Number(prompt("첫번째 숫자"));
// const userNumber02 = Number(prompt("두번째 숫자"));
// const userNumber03 = Number(prompt("세번째 숫자"));

//c=10는 기본 매개변수로 설정해준 것임(사용자가 값을 입력하지 않았을 때를 대비)
// function multiple(a, b, c = 10) {
//   return a + b + c;
// }
// 1;
// console.log(multiple(1, 2));

// function clacSum(n) {
//   let sum = 0;
//   for (let i = 1; i <= n; i++) {
//     sum += i;
//   }
//   console.log(`1부터 ${n}까지 더하면 ${sum}입니다`);
// }
// clacSum(5);

// const hi = "hello";
// function greeting() {
//   console.log(hi);
// }
// greeting();

//스코프
// let hi = "hello";
// function change() {
//   hi = "bye";
// }
// console.log(hi);
// change();
// console.log(hi);

// const factor = 5;
// function clac() {
//   return num * factor;
// }
// const num = 10;
// let result = calc();
// document.write(`result : ${result}`);

//  1) var보다는 let, const 키워드로 변수를 선언해라. var를 갖다 쓰면 전역요소로 전체를 덮어쓰게 됨.
// function addSum(n) {
//   var sum = 0;
//   for (var i = 0; i <= n; i++) {
//     sum += i;
//   }
//   return sum;
// }
// var num = 3;
// console.log(`1부터 ${num}까지 더하면 ${addSum(num)}`);

//   2) 가급적이면, 전역 스코프의 변수선언은 피해라
