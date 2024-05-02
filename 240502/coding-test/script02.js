//삼각형이 완성되기 위한 전제 조건
// 3개의 변중 가장 긴 변의 길이가 나머지 두개의 변의 길이의 합과 같거나 크면 삼각형이 될 수 없다.

const a = Number(prompt("첫번째"));
const b = Number(prompt("두번째"));
const c = Number(prompt("세번째"));
//쌤이한거
const solution = (a, b, c) => {
  let answer = "YES";
  let max;
  let tot = a + b + c;

  if (a > b) {
    max = a;
  } else {
    max = b;
  }
  if (c > max) max = c;

  if (tot - max <= max) answer = "no";
  else answer = "yes";
};
console.log(solution(a, b, c));

// 내가한거
// let max;
// let last;

// if (a > b) {
//   if (b > c) {
//     max = a;
//     last = b + c;
//   } else {
//     max = c;
//     last = a + b;
//   }
// } else {
//   max = b;
//   last = a + c;
// }

// console.log(a, b, c, last, max);

// if (last <= max) {
//   alert("삼각형 no...");
// } else {
//   alert("삼각형 Yes!!!");
// }
