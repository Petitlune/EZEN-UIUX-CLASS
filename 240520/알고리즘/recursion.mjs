// 어떤 숫자 값을 인수로 전달했을 때 숫자가 1개씩 증가하는 함수

// const myFuncion = (num) => {
//   console.log(num);
//   myFuncion(num + 1);
// };

// myFuncion(1);

//재귀함수의 단점 중 하나 ==> break를 걸어주지 않으면 무한으로 셀프반복
// 컴퓨터가 재귀함수 만나면 cpu를 활용해서 계산 => 저장공간 = 콜스택
//브레이크 = 기저조건 = 탈출조건

// const funcB = () => {
//   let a = 10;
//   let b = 5;
//   return a - b;
// };

// const funcA = () => {
//   let a = 10;
//   let b = 5;
//   let c = funcB();
//   return a + b + c;
// };
// console.log(funcA());
// console.log(funcB());

// const myFunc = (num) => {
//   if (num > 3) return;
//   console.log(num);
//   myFunc(num + 1);
// };
// myFunc(1);
//재귀함수는 콜스택의 영역을 많이 차지함.
//메모리가 많지 않은 시스템 일수록 재귀함수 사용하는 것은 비효율적
//재귀함수가 빛을 발 할때 ==> 절대로 반복문이 따라오지 못하는 상황에서 사용된다.
//==> 팩토리얼 타입의 연산 작업
// 숫자 n이 주어졌을 때, 1부터 n까지의 모든 수의 곱을 계산하는 것.
//5! = 5팩토리얼 = 5*4*3*2*1
//재귀적으로 무언가를 표현하는 것이 굉장히 어색함.
// 하향식 방식으로 작성하는 것을 추천 => 이미 재귀함수의 시스템이 구축되어 있다고 생각하고 연산식을 작성
//하향식 재귀함수 == 효율적
// const factorial = (n) => {
//   if (n === 1 || n === 0) {
//     return 1;
//   } else {
//     return n * factorial(n - 1);
//   }
// };

// console.log(factorial(5));

//재귀함수와 반복문 비교
// for (let i = 0; i < 11; i++) {
//   console.log(i);
// }

//상향식 재귀함수 == 비효율적
// const myFunc = (n) => {
//   if (n > 10) return;
//   console.log(n);
//   myFunc(n + 1);
// };

// console.log(myFunc(1));

const arr = [1, 2, 3, 4, 5];

//하향식 재귀함수 사용해서 모두 더하는 결과를 도출
// const sumArr = (arr) => {
//   if (arr === 1 || arr === 0) {
//     return 1;
//   } else {
//     return arr[arr.length - 1] + sumArr(arr[arr.slice(0, -1)]);
//   }
// };
// console.log(sumArr(arr));

// const factorial = (arr) => {
//   let answer = 0;
//   for (let i = 0; i < arr.length; i++) {
//     answer += arr[i];
//   }
// };

//하노이 탑
//원반 갯수 count  if 3개면 2가 기준!
//시작 기둥 = from
//도착 기둥 = to
//잠시 머물러야하는 기둥 = temp

const hanoi = (count, from, to, temp) => {
  if (count === 0) return;

  hanoi(count - 1, from, temp, to);
  console.log(`원반 ${count} 를 ${from}에서 ${to}로 이동`);
  hanoi(count - 1, temp, to, from);
};
hanoi(3, "A", "C", "B");
