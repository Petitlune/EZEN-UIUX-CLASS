const a = Number(prompt("20이하의 자연수 입력"));

let sum = 0;

const solution = (a) => {
  for (let i = 1; i <= a; i++) {
    sum += i;
  }
  return sum;
};

console.log(solution(a));
