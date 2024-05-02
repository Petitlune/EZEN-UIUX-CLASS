const a = Number(prompt("첫번째 : 100이하의 자연수 입력"));
const b = Number(prompt("두번째 :100이하의 자연수 입력"));
const c = Number(prompt("세번째 :100이하의 자연수 입력"));

const solution = (a, b, c) => {
  let answer;
  if (a < b) {
    answer = a;
  } else {
    answer = b;
  }
  if (c < answer) answer = c;
  return answer;
};
console.log(solution(a, b, c));

// if (num1 > num2) {
//   if (num1 > num3) {
//     Max = num1;
//   } else {
//     Max = num3;
//   }
// } else {
//   Max = num2;
// }

// alert(`가장 큰 수는 ${Max}입니다`);
